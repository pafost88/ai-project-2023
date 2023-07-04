import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import PasswordField from '../../../assets/overrides/password-field/password-field';

import './security.css';
import '../../../assets/styles/main.css';

export default function ProfileSecurity() {
    return (
        <div className="security-inner">
            <div className="security-card">
                <div className="card-header">
                    <span className='subheadline-sh1-bold'>Change Password</span>
                </div>
                <div className="card-content">
                    <div className="form-header">

                    </div>
                    <div className='form-content'>
                        <Form data-bs-theme="dark" className='form-inner'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className='button-medium-bold'>Current Password</Form.Label>
                                <PasswordField placeholder="Current Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className='button-medium-bold'>New Password</Form.Label>
                                <PasswordField placeholder="New Password" />
                                <Form.Label className='caption-regular'>Password should be at least 8 characters long.</Form.Label>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className='button-medium-bold'>Repeat New Password</Form.Label>
                                <PasswordField placeholder="Repeat New Password" />
                            </Form.Group>
                        </Form>
                    </div>
                    <div className='form-actions'>
                        <Button variant="dark" className='w-20'>Discard</Button>
                        <Button variant="success" className='w-30'>Change Password</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}