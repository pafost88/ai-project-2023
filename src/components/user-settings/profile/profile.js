import './profile.css';
import '../../../assets/styles/main.css';
import EmailIcon from '../../../assets/icons/email-icon.svg';
import ProfileAvatar from '../../../assets/avatars/Base.jpg';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export default function ProfileAccount() {
    return (
        <div className="profile-inner">
            <div className="profile-card">
                <div className="card-header">
                    <span className='subheadline-sh1-bold'>Profile</span>
                </div>
                <div className="card-content">
                    <div className='form-header'>
                        <img scr={ProfileAvatar} alt=''></img>
                        <div className='header-buttons'>
                            <Button variant="dark" className='w-20 transparent-background-button '>Delete</Button>
                            <Button variant="dark" className='w-20 transparent-background-button '><span className='green-label'>Update</span></Button>
                        </div>
                    </div>
                    <div className='form-content'>
                        <Form data-bs-theme="dark" className='form-inner'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='disabled-label button-medium-bold'>Username</Form.Label>
                                <Form.Control className='disabled-input' type="text" placeholder="Nazarverhun" disabled />
                            </Form.Group>
                            <InputGroup className="mb-3 name-input">
                                <Form.Group>
                                    <Form.Label className='button-medium-bold'>Username</Form.Label>
                                    <Form.Control className='transparent-background' placeholder="First name" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className='button-medium-bold'>Username</Form.Label>
                                    <Form.Control className='transparent-background' placeholder="Last name" />
                                </Form.Group>
                            </InputGroup>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <InputGroup className="mb-3 w-90">
                                    <InputGroup.Text className='transparent-background disabled-input'><img src={EmailIcon} alt=''></img></InputGroup.Text>
                                    <Form.Control
                                        className='transparent-background disabled-input'
                                        placeholder="Email"
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className='button-medium-bold'>Company Name</Form.Label>
                                <Form.Control className='transparent-background' type="text" placeholder="Company Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className='button-medium-bold'>Job title</Form.Label>
                                <Form.Control className='transparent-background' type="text" placeholder="Job title" />
                            </Form.Group>
                        </Form>
                    </div>
                    <div className='form-actions'></div>
                </div>
                <div className="card-footer"></div>
            </div>
        </div>
    )
}