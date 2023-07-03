
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PasswordField from '../../../../../assets/overrides/password-field/password-field';

export default function NewPassword() {
    

    return (
        <>
            <div className='form-label'>
                <span className='header-label'>Set new password</span>
            </div>
            <div className='form-input'>
                <Form data-bs-theme="dark">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <PasswordField placeholder="Password" />
                        <Form.Label className='light-label'>Password should be at least 8 characters long.</Form.Label>
                        <PasswordField placeholder="Repeat Password" />
                    </Form.Group>
                </Form>
            </div>
            <div className='form-buttons'>
                <Button variant="success" className='w-100'>Set new password</Button>
            </div>
        </>
    );
}