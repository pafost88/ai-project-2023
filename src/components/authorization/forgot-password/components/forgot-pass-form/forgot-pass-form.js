import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';


import EmailIcon from '../../../../../assets/icons/email-icon.svg';
import { Component } from 'react';
import axios from 'axios';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);

        this.forgotPassword = this.forgotPassword.bind(this);

    }


    forgotPassword(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const body = {
            "email": data.get('email'),
        };

        /*axios.post("http://3.75.93.196:8000/recover-password", body).then((response) => {
            console.log(response);
        });*/
    }

    render() {
        return (
            <>
                <div className='form-label'>
                    <span className='header-label'>Forgot Password?</span>
                    <span className='label-description'>No worries, we’ll send you verification code to reset password</span>
                </div>
                <form className='form-input' data-bs-theme="dark" onSubmit={this.forgotPassword}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='light-label'>Email Address</Form.Label>
                        <InputGroup className="mb-3 w-90">
                            <InputGroup.Text className='transparent-background'><img src={EmailIcon} alt=''></img></InputGroup.Text>
                            <Form.Control
                                name='email'
                                type='email'
                                className='transparent-background'
                                placeholder="Email Address"
                                required
                            />
                        </InputGroup>
                    </Form.Group>
                    <div className='verify-buttons'>
                        <a href='/'><Button variant="dark" className='w-20'>Go to Log In</Button></a>
                        <Button variant="success" className='w-20' type='submit'>Reset password</Button>
                    </div>
                </form>
            </>
        );
    }
}

export default ForgotPassword;