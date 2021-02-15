import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import { Form, Button, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";

import Message from "../components/Message.js";
import Loading from "../components/Loading.js"
import { login } from "../store/actions/userActions.js"

import FormContainer from "../components/FormContainer.js";


const LoginPage = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const dispatch = useDispatch();
  const { loading, userInfo, error } = useSelector(state => state.userLogin)
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password))
  }

  // 获取到用户信息之后进行重定向
  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])


  return (
    <FormContainer>
      <h1>登陆</h1>
      { error && <Message variant="danger">{error}</Message>}
      <Form>
        <Form.Group controlId="email">
          <Form.Label>邮箱：</Form.Label>
          <Form.Control type="email" placeholder="请输入邮箱" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>密码：</Form.Label>
          <Form.Control type="password" placeholder="请输入密码" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" onClick={onSubmit}>登陆</Button>
      </Form>
      <Row className="my-3">
        <Col><Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>前往注册</Link></Col>
      </Row>
    </FormContainer>
  )
}

export default LoginPage
