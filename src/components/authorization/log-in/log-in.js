import './log-in.css'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import EmailIcon from '../../../assets/icons/email-icon.svg';
import PasswordIcon from '../../../assets/icons/password-icon.svg';
import ArrowRight from '../../../assets/icons/arrow-right-green.svg';
import PasswordShow from '../../../assets/icons/password-show.svg';

import Button from 'react-bootstrap/Button';

export default function LogIn() {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
      };
    return (
        <>
            <div class='form-label'>
                <span class='header-label'>Welcome Back!</span>
                <span class='label-description'>We are glad to see you again at Businex. Log in to continue.</span>
            </div>
            <div class='form-input'>
                <Form data-bs-theme="dark">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='light-label'>Username or Email Address</Form.Label>
                        <InputGroup className="mb-3 w-90 transparent-background">
                            <InputGroup.Text className='transparent-background'><img src={EmailIcon} alt=''></img></InputGroup.Text>
                            <Form.Control
                                className='transparent-background'
                                placeholder="Username or Email Address"
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <div className='password-labels'>
                            <Form.Label className='light-label'>Password</Form.Label>
                            <Form.Label><a href='/' className='green-label'>Forgot password?</a></Form.Label>
                        </div>
                        <InputGroup className="mb-3 w-90">
                            <InputGroup.Text className='transparent-background'><img src={PasswordIcon} alt=''></img></InputGroup.Text>
                            <Form.Control
                                className='transparent-background'
                                type={passwordShown ? 'text' : 'password'}
                                placeholder="Password"
                            />
                            <InputGroup.Text className='show-pass transparent-background'><img onClick={togglePassword} src={PasswordShow} alt=''></img></InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                </Form>
                <div className='remember-pass'>
                    <Form.Check data-bs-theme="dark" className='label-description'
                        label='Remember password for 30 days'
                    />
                </div>
            </div>

            <div className='form-buttons'>
                <Button variant="success" className='w-100'>Log In</Button>
            </div>

            <div>
                <Form.Label class='terms-label'><span>Don’t have account yet? <a className='green-label' href='/'>Create Account <img src={ArrowRight} alt=''></img></a></span></Form.Label>
            </div>
        </>
    );
}