import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import './forgot-pass-verify.css'

export default function RegistrationVerify() {
    return (
        <>
            <div class='form-label'>
                <span class='header-label'>Check your email</span>
                <span class='label-description'>We sent a reset link to <span className='user-email'>hello@myplanet.design</span></span>
            </div>
            <div class='form-input'>
                <div className='resend-email'>
                    <Form.Label className='resend-email-label'>Didn’t receive the email?</Form.Label>
                    <Form.Label><a href='/' className='green-label'>Click to resend</a></Form.Label>
                </div>
                <Form data-bs-theme="dark">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control className='transparent-background input-line' type="text"/>
                    </Form.Group>
                </Form>
            </div>
            <div className='verify-buttons'>
                <a href='/forgot-password'><Button variant="dark" className='w-20'>Go Back</Button></a>
                <Button variant="success" className='w-20'>Open email app</Button>
            </div>
        </>
    );
}