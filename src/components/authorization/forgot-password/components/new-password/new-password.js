import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import PasswordIcon from '../../../../../assets/icons/password-icon.svg';
import PasswordShow from '../../../../../assets/icons/password-show.svg';

export default function NewPassword() {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
      };

    return (
        <>
            <div className='form-label'>
                <span className='header-label'>Set new password</span>
            </div>
            <div className='form-input'>
                <Form data-bs-theme="dark">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <InputGroup className="mb-3 w-90">
                            <InputGroup.Text className='transparent-background'><img src={PasswordIcon} alt=''></img></InputGroup.Text>
                            <Form.Control
                                className='transparent-background'
                                type={passwordShown ? 'text' : 'password'}
                                placeholder="Password"
                            />
                            <InputGroup.Text className='show-pass transparent-background'><img onClick={togglePassword} src={PasswordShow} alt=''></img></InputGroup.Text>
                        </InputGroup>
                        <Form.Label className='light-label'>Password should be at least 8 characters long.</Form.Label>
                        <InputGroup className="mb-3 w-90">
                            <InputGroup.Text className='transparent-background'><img src={PasswordIcon} alt=''></img></InputGroup.Text>
                            <Form.Control
                                className='transparent-background'
                                type="password"
                                placeholder="Repeat Password"
                            />
                            <InputGroup.Text className='show-pass transparent-background'><img onClick={togglePassword} src={PasswordShow} alt=''></img></InputGroup.Text>
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