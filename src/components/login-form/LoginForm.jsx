import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setUserName } from '../../store/addUserInfoSlice';
import "./loginform.scss"

const LoginForm = () => {
    const [userInfo, SetUserInfo] = useState("");
    const store = useSelector((state) => state.addUserInfo.userName);
    const dispatch = useDispatch();
    console.log(store);
    const handleName = (e) => {
        SetUserInfo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setUserName(userInfo));
        SetUserInfo("")
    }

    return (
        <Container>
            <Row className='border justify-content-center'>
                <Col sm={6}>
                    <div className="login-form">
                        <div className='login-form-top'>
                            <div className="profile-image-box">
                                <img src={require("../../assets/images/profilePic.jpg")} alt="" />
                            </div>
                            <span>Upload Profile Image</span>
                        </div>
                        <Form onSubmit={handleSubmit}>
                            <Form.Control 
                                type="text" 
                                placeholder="Username"
                                onChange={handleName}
                            />
                            <Button type='submit' className='w-50 mt-5 mx-auto' >LOGIN</Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginForm;
