import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function RegistrationVerify() {
    return (
        <>
            <div class='form-label'>
                <span class='header-label'>Verify your email</span>
                <span class='label-description'>We sent a verification link to your email <span className='user-email'>hello@myplanet.design</span></span>
            </div>
            <div class='form-input'>
                <Form data-bs-theme="dark">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control className='transparent-background input-line' type="text"/>
                    </Form.Group>
                </Form>
            </div>
            <div className='verify-buttons'>
                <a href='/'><Button variant="dark" className='w-20'>Go to Log In</Button></a>
                <Button variant="success" className='w-20'>Open Email app</Button>
            </div>
        </>
    );
}