import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import PasswordIcon from '../../../assets/icons/password-icon.svg'
import PasswordShow from '../../../assets/icons/password-show.svg';

import './password-field.css'
import { FormGroup } from 'react-bootstrap';
import validator from 'validator';

export default function PasswordField(props) {
    const [passwordShown, setPasswordShown] = useState(false);
    const [error, setError] = useState(false);

    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
      };

      const handleChange = (event) => {
        if (!validator.isStrongPassword(event.target.value, {
            minLength: 8})) {
            setError("Password is not strong!");
        }
    }
    return (
        <FormGroup>
             <InputGroup className="mb-3 w-90">
            <InputGroup.Text className='transparent-background'><img src={PasswordIcon} alt=''></img></InputGroup.Text>
            <Form.Control
                required
                name={props.name}
                className='transparent-background'
                type={passwordShown ? 'text' : 'password'}
                placeholder={props.placeholder}
                onChange={handleChange}
            />
            <InputGroup.Text className='show-pass transparent-background'><img onClick={togglePassword} src={PasswordShow} alt=''></img></InputGroup.Text>
            </InputGroup>
            {error !== '' ? <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback> : <></>}
        </FormGroup>
    );
}