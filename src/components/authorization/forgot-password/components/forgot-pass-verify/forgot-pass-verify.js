import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import './forgot-pass-verify.css'


import EmailIcon from '../../../../../assets/icons/email-icon.svg';

export default function RegistrationVerify() {
    return (
        <>
            <div class='form-label'>
                <span class='header-label'>Check your email</span>
                <span class='label-description'>We sent a reset link to <span className='user-email'>hello@myplanet.design</span></span>
            </div>
            <div class='form-input'>
                <Form data-bs-theme="dark">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='light-label'>Email Address</Form.Label>
                        <InputGroup className="mb-3 w-90">
                            <InputGroup.Text><img src={EmailIcon} alt=''></img></InputGroup.Text>
                            <Form.Control
                                placeholder="Email Address"
                            />
                        </InputGroup>
                    </Form.Group>
                </Form>
                <div className='resend-email'>
                    <Form.Label className='resend-email-label'>Didn’t receive the email?</Form.Label>
                    <Form.Label><a href='/' className='green-label'>Click to resend</a></Form.Label>
                </div>
            </div>
            <div className='verify-buttons'>
                <Button variant="dark" className='w-20'>Go Back</Button>
                <Button variant="success" className='w-20'>Open email app</Button>
            </div>
        </>
    );
}