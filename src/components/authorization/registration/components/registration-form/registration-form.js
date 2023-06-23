import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import './registration-form.css'

import EmailIcon from '../../../../../assets/icons/email-icon.svg';
import PasswordIcon from '../../../../../assets/icons/password-icon.svg';

export default function RegistrationForm() {
    return (
        <>
            <div class='form-label'>
                <span class='header-label'>Set up your Account</span>
                <span class='label-description'>You have been invited to join Businex. Fill out your details below.</span>
            </div>
            <div class='form-input'>
                <Form data-bs-theme="dark">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Username" />
                    </Form.Group>
                    <InputGroup className="mb-3 name-input">
                        <Form.Control placeholder="First name" />
                        <Form.Control placeholder="Last name" />
                    </InputGroup>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <InputGroup className="mb-3 w-90">
                            <InputGroup.Text><img src={EmailIcon} alt=''></img></InputGroup.Text>
                            <Form.Control
                                placeholder="Email"
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <InputGroup className="mb-3 w-90">
                            <InputGroup.Text><img src={PasswordIcon} alt=''></img></InputGroup.Text>
                            <Form.Control
                                placeholder="Password"
                            />
                        </InputGroup>
                        <Form.Label className='light-label'>Password should be at least 8 characters long.</Form.Label>
                        <InputGroup className="mb-3 w-90">
                            <InputGroup.Text><img src={PasswordIcon} alt=''></img></InputGroup.Text>
                            <Form.Control
                                placeholder="Password"
                            />
                        </InputGroup>
                    </Form.Group>
                </Form>
                <Form.Group className="mb-3 remember-pass">
                    <Form.Check data-bs-theme="dark" className='label-description'/>
                    <Form.Label class='terms-label'><span>I agree with Businex <a className='green-label' href='/'>Terms and Policy.</a></span></Form.Label>
                </Form.Group>
            </div>

            <div className='form-buttons'>
                <Button variant="success" className='w-100'>Sing Up</Button>
            </div>
        </>
    );
}