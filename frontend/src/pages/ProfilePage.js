import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import { Form, Button, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";

import Message from "../components/Message.js";
import Loading from "../components/Loading.js"
import { getUserDetails, updateUserProfile } from "../store/actions/userActions.js"

import FormContainer from "../components/FormContainer.js";


const ProfilePage = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  // 获取用户详情
  const { loading, user, error } = useSelector(state => state.userDetails);
  // 获取用户登录成功之后的状态 必须是用户登陆之后才能获取用户个人信息
  const { userInfo } = useSelector(state => state.userLogin);
  const { success } = useSelector(state => state.userUpdateProfile);

  // 更新用户资料
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile({ id: user.is, name, email, password }));
  }

  // 获取到用户信息之后进行重定向
  useEffect(() => {
    if (!userInfo) {
      history.push("/login")
    } else {
      //登录之后，如果没有user字段，那么需要请求获取详情的数据
      if (user && !user.name && !user.email) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [userInfo, user, history])
  return (
    <Row>
      <Col md={3}>
        {errorMessage && <Message variant="danger">{errorMessage}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {success && <Message variant="success">更新成功</Message>}
        <h2>个人资料</h2>
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
          <Button variant="primary" onClick={onSubmit}>提交</Button>
        </Form>
      </Col>
      <Col md={9}>用户订单信息</Col>
    </Row>
  )
}

export default ProfilePage
