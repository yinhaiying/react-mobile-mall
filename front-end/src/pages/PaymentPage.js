import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../store/actions/cartActions.js";
import FormContainer from "../components/FormContainer.js";

const PaymentPage = ({ history }) => {
  const { shippingAddress } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  if (!shippingAddress) {
    history.push("/shipping")
  }
  const [paymentMethod, setPaymentMethod] = useState("微信");
  const onSubmit = () => {
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/orderlist");
  }
  return (
    <FormContainer>
      <h2>支付方式</h2>
      <Form>
        <Form.Group>
          <Form.Label as='legend'>选择支付方式</Form.Label>

          <Col>
            <Form.Check
              type='radio'
              label='微信'
              id='wechat'
              name='paymenMethod'
              value='微信'
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            <Form.Check
              type='radio'
              label='支付宝'
              id='zhifubao'
              name='paymenMethod'
              value='支付宝'
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            <Form.Check
              type='radio'
              label='paypal'
              id='paypal'
              name='paymenMethod'
              value='paypal'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button variant="primary" onClick={onSubmit}>继续下一步</Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentPage
