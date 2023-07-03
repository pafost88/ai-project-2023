import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import PasswordField from '../../../../../assets/overrides/password-field/password-field';

import './registration-form.css'

import EmailIcon from '../../../../../assets/icons/email-icon.svg';
import ArrowRight from '../../../../../assets/icons/arrow-right-green.svg';

export default function RegistrationForm() {

    return (
        <>
            <div className='form-label'>
                <span className='header-label'>Set up your Account</span>
                <span className='label-description'>You have been invited to join Businex. Fill out your details below.</span>
            </div>
            <div className='form-input'>
                <Form data-bs-theme="dark">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control className='transparent-background' type="text" placeholder="Username" />
                    </Form.Group>
                    <InputGroup className="mb-3 name-input">
                        <Form.Control className='transparent-background' placeholder="First name" />
                        <Form.Control className='transparent-background' placeholder="Last name" />
                    </InputGroup>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <InputGroup className="mb-3 w-90">
                            <InputGroup.Text className='transparent-background'><img src={EmailIcon} alt=''></img></InputGroup.Text>
                            <Form.Control
                                className='transparent-background'
                                placeholder="Email"
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <PasswordField placeholder="Password" />
                        <Form.Label className='light-label'>Password should be at least 8 characters long.</Form.Label>
                        <PasswordField placeholder="Repeat Password" />
                    </Form.Group>
                </Form>
                <Form.Group className="mb-3 remember-pass">
                    <Form.Check data-bs-theme="dark" className='label-description'/>
                    <Form.Label className='terms-label'><span>I agree with Businex <a className='green-label' href='/'>Terms and Policy.</a></span></Form.Label>
                </Form.Group>
            </div>

            <div className='form-buttons'>
                <a href='/registration-verify'><Button variant="success" className='w-100'>Sing Up</Button></a>
            </div>

            <div>
                <Form.Label className='terms-label'><span>Already have an account? <a className='green-label' href='/'>Log In <img src={ArrowRight} alt=''></img></a></span></Form.Label>
            </div>
        </>
    );
}