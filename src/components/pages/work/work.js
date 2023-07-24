import {Component, createRef, useRef, useState} from "react";

import './work.css';
import Button from "react-bootstrap/Button";

import ArrowLeft from '../../../assets/icons/arrow-left-dark.svg';
import Form from "react-bootstrap/Form";
import axios from "axios";
import {baseURL} from "../../../App";
import Cookies from "universal-cookie/es6";
import LoadingBar from "react-top-loading-bar";
import {useNavigate} from "react-router-dom";

export function Work() {
    const ref = useRef(0);
    const navigate = useNavigate();
    const [result, setResult] = useState();

    const generateContentPlan = (event) => {
        ref.current.continuousStart();
        event.preventDefault();
        const url = baseURL + '/ai/generate-content-plan';
        const data = new FormData(event.target);
        const cookies = new Cookies();
        const bearer = cookies.get('bearer');
        const config = {
            headers: { Authorization: `Bearer ${bearer}`}
        }

        const body = {
            "business_details": data.get('business-details'),
            "your_goal": data.get('goal'),
            "audience": data.get('audience'),
            "schedule_of_publication": data.get('schedule'),
            "content_wishes": data.get('content-wishes'),
            "budget": data.get('budget'),
        };

        axios.post(url, body, config).then((response) => {
            console.log(response.data.content_plan);
            ref.current.complete();
            setResult(response.data.content_plan);
            navigate('result', {
                state: {
                    text: response.data.content_plan
                }
            });
        }).catch(function (err){
            ref.current.complete();
            alert(err);
        });

    }
    return (
        <>
            <LoadingBar color='#28b485' ref={ref} />
            <div className='content'>
                <div className='back'>
                    <Button className='back-button' variant='dark'><img src={ArrowLeft} alt=''/>Back</Button>
                </div>
                <div className='breadcrumb'>
                    <span className='bread-item medium-body-2'>Work</span>
                    <span>/</span>
                    <span className='bread-selected-item medium-body-2'>Content plan</span>
                </div>
                <div className='form-header'>
                    <h5 className='headline-h5'>Generate Content Plan from your text</h5>
                    <div className='header-description'>You only need to enter your ideas and we will create everything
                        for you
                    </div>
                </div>
                <form data-bs-theme="dark" className='form-content' onSubmit={generateContentPlan}>
                    <div className='business-details'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='light-label'>Business Details</Form.Label>
                            <Form.Control as='textarea' rows={5}
                                          name='business-details'
                                          className='input-background'
                                          placeholder="Tell us information about your business"
                                          required
                            />
                        </Form.Group>
                    </div>
                    <div className='row-inputs'>
                        <div className='w-50'>
                            <Form.Group className="mb-3">
                                <Form.Label className='light-label'>Your Goal</Form.Label>
                                <Form.Control as='textarea' rows={5}
                                              name='goal'
                                              className='input-background'
                                              placeholder="What is your goal?"
                                              required
                                />
                            </Form.Group>
                        </div>
                        <div className='w-50'>
                            <Form.Group className="mb-3">
                                <Form.Label className='light-label'>Audience</Form.Label>
                                <Form.Control as='textarea' rows={5}
                                              name='audience'
                                              className='input-background'
                                              placeholder="Tell us more about your target audience"
                                              required
                                />
                            </Form.Group>
                        </div>
                    </div>
                    <div className='row-inputs'>
                        <div className='w-50'>
                            <Form.Group className="mb-3">
                                <Form.Label className='light-label'>Schedule of publications</Form.Label>
                                <Form.Control
                                    type='text'
                                    name='schedule'
                                    className='input-background'
                                    placeholder="Once a week"
                                    required
                                />
                            </Form.Group>
                        </div>
                        <div className='w-50'>
                            <Form.Group className="mb-3">
                                <Form.Label className='light-label'>Content wishes</Form.Label>
                                <Form.Control
                                    type='text'
                                    name='content-wishes'
                                    className='input-background'
                                    placeholder="I want funny stories or serious text, etc..."
                                    required
                                />
                            </Form.Group>
                        </div>
                    </div>
                    <div className='row-inputs'>
                        <Form.Group className="mb-3 w-50">
                            <Form.Label className='light-label'>Budget</Form.Label>
                            <Form.Control
                                type='text'
                                name='budget'
                                className='input-background'
                                placeholder="$500 per week"
                                required
                            />
                        </Form.Group>
                        <div className='w-50'></div>
                    </div>
                    <Button variant="success" className='w-25 button-medium-bold generate-btn' type='submit'>Generate Content plan</Button>
                </form>
            </div>
        </>

    );
}