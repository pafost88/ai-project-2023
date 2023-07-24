import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import PasswordIcon from '../../../assets/icons/password-icon.svg'
import PasswordShow from '../../../assets/icons/password-show.svg';

import EmailIcon from '../../../assets/icons/email-icon.svg';
import ArrowRight from '../../../assets/icons/arrow-right-green.svg';

import { Component } from 'react';
import axios from "axios";
import Cookies from "universal-cookie/es6";


class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: 0,
            passwordShown: false,
            isValid: 0,
            input: {},
            errors: {
                "password": "",
                "confirm-password": ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.logIn = this.logIn.bind(this);
    }

    togglePassword = ev => {
        this.setState({ passwordShown: !this.state.passwordShown })
    }

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
        this.setState({
            input
        });
        if (event.target.value.length > 7) {
            this.setDisabled(true);
        }
        else {
            this.setDisabled(false);
        }
    }

    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (input["password"].length < 8) {
            isValid = false;
            errors["password"] = 'Password is too short!'
        }

        this.setState({
            errors: errors
        });

        return isValid;
    }

    setDisabled(isDisabled) {
        this.setState({
            disabled: isDisabled,
        })
    }

    logIn(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const cookies = new Cookies();

        if (this.validate()) {
            let input = {};
            input["password"] = "";
            this.setState({ input: input });

            const body = {
                "email": data.get('email'),
                "password": data.get('password'),
            };

            axios.post("http://3.75.93.196:8000/login-user", body).then((response) => {
                alert("Log In success");
                cookies.set('bearer', response.data.access_token, {
                    maxAge: 1800
                });
                window.location.href = '/app/work';
            }).catch(function (err){
                alert(err);
            });
        }
    }

    render() {
        return (
            <>
                <div className='form-label'>
                    <span className='header-label'>Welcome Back!</span>
                    <span className='label-description'>We are glad to see you again at Businex. Log in to continue.</span>
                </div>
                <form data-bs-theme="dark" className='form-input' onSubmit={this.logIn}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='light-label'>Email Address</Form.Label>
                        <InputGroup className="mb-3 w-90 transparent-background">
                            <InputGroup.Text className='transparent-background'><img src={EmailIcon} alt=''></img></InputGroup.Text>
                            <Form.Control
                                type='email'
                                name='email'
                                className='transparent-background'
                                placeholder="Email Address"
                                required
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <div className='password-labels'>
                            <Form.Label className='light-label'>Password</Form.Label>
                            <Form.Label><a href='/forgot-password' className='green-label'>Forgot password?</a></Form.Label>
                        </div>
                        <div className="mb-3">
                            <InputGroup className="w-90">
                                <InputGroup.Text className='transparent-background'><img src={PasswordIcon} alt=''></img></InputGroup.Text>
                                <Form.Control
                                    name='password'
                                    className='transparent-background'
                                    type={this.state.passwordShown ? 'text' : 'password'}
                                    placeholder="Password"
                                    onChange={this.handleChange}
                                    required
                                />
                                <InputGroup.Text className='show-pass transparent-background'><img onClick={this.togglePassword} src={PasswordShow} alt=''></img></InputGroup.Text>
                            </InputGroup>
                            <div className="text-danger validation-error">
                                {this.state.errors['password']}
                            </div>
                        </div>
                    </Form.Group>
                    <div className='remember-pass'>
                        <Form.Check data-bs-theme="dark" className='label-description'
                            label='Remember password for 30 days'
                        />
                    </div>
                    <div className='form-buttons'>
                        <Button disabled={!this.state.disabled} variant="success" className='w-100' type='submit'>Sing Up</Button>
                    </div>
                </form>

                <div>
                    <Form.Label className='terms-label'><span>Don’t have account yet? <a className='green-label' href='/registration'>Create Account <img src={ArrowRight} alt=''></img></a></span></Form.Label>
                </div>
            </>
        );
    }
}

export default LogIn;