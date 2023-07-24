import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import './registration-form.css'

import PasswordIcon from '../../../../../assets/icons/password-icon.svg'
import PasswordShow from '../../../../../assets/icons/password-show.svg';

import EmailIcon from '../../../../../assets/icons/email-icon.svg';
import ArrowRight from '../../../../../assets/icons/arrow-right-green.svg';
import { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

class RegistrationForm extends Component {
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
        this.history = {};
        this.createUser = this.createUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
    }

    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;
        if (input["password"].length < 8) {
            isValid = false;
            errors["password"] = 'Password is too short!'
        }

        if (input["password"] != input["confirm-password"]) {
            isValid = false;
            errors["confirm-password"] = "Confirm password is Not Matched";
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

    async createUser(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        if (this.validate()) {
            let input = {};
            input["password"] = "";
            input["confirm-password"] = "";
            this.setState({ input: input });

            const body = {
                "first_name": data.get('first-name'),
                "last_name": data.get('last-name'),
                "email": data.get('email'),
                "password": data.get('password'),
                "confirm_password": data.get('confirm-password'),
            }

            await axios.post("http://3.75.93.196:8000/users", body).then((response) => {
                console.log(response.data);
            });
            window.location.href = '/';

        }


        //const response = await axios.post('http://3.75.93.196:8000/users',);
    }

    render() {
        return (
            <>
                <div className='form-label'>
                    <span className='header-label'>Set up your Account</span>
                    <span className='label-description'>You have been invited to join Businex. Fill out your details below.</span>
                </div>
                <div className='form-input'>
                    <form data-bs-theme="dark" onSubmit={this.createUser} >
                        <InputGroup className="mb-3 name-input">
                            <Form.Control type='text' name='first-name' className='transparent-background' placeholder="First name" />
                            <Form.Control type='text' name='last-name' className='transparent-background' placeholder="Last name" />
                        </InputGroup>
                        <Form.Group className="mb-3">
                            <InputGroup className="mb-3 w-90">
                                <InputGroup.Text className='transparent-background'><img src={EmailIcon} alt=''></img></InputGroup.Text>
                                <Form.Control
                                    type='email'
                                    name='email'
                                    className='transparent-background'
                                    placeholder="Email"
                                    required
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3">
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
                            <Form.Label className='light-label'>Password should be at least 8 characters long.</Form.Label>
                            <div className="mb-3">
                                <InputGroup className='w-90'>
                                    <InputGroup.Text className='transparent-background'><img src={PasswordIcon} alt=''></img></InputGroup.Text>
                                    <Form.Control
                                        name='confirm-password'
                                        className='transparent-background'
                                        type={this.state.passwordShown ? 'text' : 'password'}
                                        placeholder="Confirm Password"
                                        onChange={this.handleChange}
                                        required
                                    />
                                    <InputGroup.Text className='show-pass transparent-background'><img onClick={this.togglePassword} src={PasswordShow} alt=''></img></InputGroup.Text>
                                </InputGroup>
                                <div className="text-danger validation-error">
                                    {this.state.errors['confirm-password']}
                                </div>
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3 remember-pass">
                            <Form.Check onChange={(e) => this.setDisabled(e.target.checked)} data-bs-theme="dark" className='label-description' />
                            <Form.Label><span>I agree with Businex <a className='green-label' href='/'>Terms and Policy.</a></span></Form.Label>
                        </Form.Group>
                        <div className='form-buttons'>
                            <Button disabled={!this.state.disabled} variant="success" className='w-100' type='submit'>Sing Up</Button>
                        </div>
                    </form>
                    <div>
                        <Form.Label className='terms-label'><span>Already have an account? <a className='green-label' href='/'>Log In <img src={ArrowRight} alt=''></img></a></span></Form.Label>
                    </div>
                </div>
            </>
        );
    }
}

export default RegistrationForm;