import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import PasswordIcon from '../../../../../assets/icons/password-icon.svg';

export default function NewPassword() {
    return (
        <>
            <div class='form-label'>
                <span class='header-label'>Set new password</span>
            </div>
            <div class='form-input'>
                <Form data-bs-theme="dark">
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
            </div>
            <div className='form-buttons'>
                <Button variant="success" className='w-100'>Set new password</Button>
            </div>
        </>
    );
}