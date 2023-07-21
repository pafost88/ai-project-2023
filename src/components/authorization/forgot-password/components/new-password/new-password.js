import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import PasswordIcon from '../../../../../assets/icons/password-icon.svg'
import PasswordShow from '../../../../../assets/icons/password-show.svg';

import './new-password.css';

import { Component } from 'react';
import axios from "axios";

class NewPassword extends Component {
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
        this.setNewPassword = this.setNewPassword.bind(this);
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

    setNewPassword(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        if (this.validate()) {
            let input = {};
            input["password"] = "";
            input["confirm-password"] = "";
            this.setState({ input: input });

            const body = {
                "password": data.get('password'),
                "confirm_password": data.get('confirm-password'),
            }

            /*axios.post("http://3.75.93.196:8000/users", body).then((response) => {
                console.log(response);
            })*/

            console.log(data.get('password')); // Reference by form input's `name` tag
        }


        //const response = await axios.post('http://3.75.93.196:8000/users',);
    }

    render() {
        return (
            <>
                <div className='form-label'>
                    <span className='header-label'>Set new password</span>
                </div>
                <form data-bs-theme="dark" onSubmit={this.setNewPassword} >
                    <Form.Group>
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
                                    placeholder="Repeat Password"
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
                    <div className='form-buttons'>
                        <Button disabled={!this.state.disabled} variant="success" className='w-100' type='submit'>Set new password</Button>
                    </div>
                </form>
            </>
        );
    }
}

export default NewPassword;