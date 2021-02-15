import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import { Form, Button, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";

import Message from "../components/Message.js";
import Loading from "../components/Loading.js"
import { login, register } from "../store/actions/userActions.js"

import FormContainer from "../components/FormContainer.js";


const RegisterPage = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const dispatch = useDispatch();
  const { loading, userInfo, error } = useSelector(state => state.userRegister);

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      setErrorMessage("密码不一致")
    } else {
      dispatch(register(name, email, password))
    }
  }

  // 获取到用户信息之后进行重定向
  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])


  return (
    <FormContainer>
      {errorMessage && <Message variant="danger">{errorMessage}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      <h1>注册</h1>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>用户名：</Form.Label>
          <Form.Control type="email" placeholder="请输入用户名" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>邮箱：</Form.Label>
          <Form.Control type="email" placeholder="请输入邮箱" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>密码：</Form.Label>
          <Form.Control type="password" placeholder="请输入密码" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="rePassword">
          <Form.Label>确认密码：</Form.Label>
          <Form.Control type="password" placeholder="请确认密码" value={rePassword} onChange={(e) => setRePassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" onClick={onSubmit}>注册</Button>
      </Form>
      <Row className="my-3">
        <Col>已有账户?<Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>前往登录</Link></Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterPage
