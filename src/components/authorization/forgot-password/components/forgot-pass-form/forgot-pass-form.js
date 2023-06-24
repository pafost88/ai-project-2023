import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';


import EmailIcon from '../../../../../assets/icons/email-icon.svg';

export default function RegistrationForm() {
    return (
        <>
            <div class='form-label'>
                <span class='header-label'>Forgot Password?</span>
                <span class='label-description'>No worries, we’ll send you verification code to reset password</span>
            </div>
            <div class='form-input'>
                <Form data-bs-theme="dark">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='light-label'>Email Address</Form.Label>
                        <InputGroup className="mb-3 w-90">
                            <InputGroup.Text className='transparent-background'><img src={EmailIcon} alt=''></img></InputGroup.Text>
                            <Form.Control
                                className='transparent-background'
                                placeholder="Email Address"
                            />
                        </InputGroup>
                    </Form.Group>
                </Form>
            </div>
            <div className='verify-buttons'>
                <Button variant="dark" className='w-20'>Go to Log In</Button>
                <Button variant="success" className='w-20'>Reset password</Button>
            </div>
        </>
    );
}