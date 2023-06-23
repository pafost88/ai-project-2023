import './log-in.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import EmailIcon from '../../../assets/icons/email-icon.svg';
import PasswordIcon from '../../../assets/icons/password-icon.svg';
import Button from 'react-bootstrap/Button';

export default function LogIn() {
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
                        <InputGroup className="mb-3 w-90">
                            <InputGroup.Text><img src={EmailIcon} alt=''></img></InputGroup.Text>
                            <Form.Control
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
                            <InputGroup.Text><img src={PasswordIcon} alt=''></img></InputGroup.Text>
                            <Form.Control
                                placeholder="Password"
                            />
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
        </>
    );
}