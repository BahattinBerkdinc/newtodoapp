import React from 'react'
import LoginForm from '../components/login-form/LoginForm'
import { Col, Container, Row } from 'react-bootstrap'

const LoginPage = () => {
  return (
    <Container>
    <Row className=" justify-content-center">
      <Col sm={6}>
        <LoginForm/>
      </Col>
    </Row>
  </Container>
  )
}

export default LoginPage
