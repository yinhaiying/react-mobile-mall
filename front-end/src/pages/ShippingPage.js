import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../store/actions/cartActions.js";
import FormContainer from "../components/FormContainer.js";


const ShippingPage = ({ history }) => {
  const { shippingAddress } = useSelector(state => state.cart);
  const [address, setAddress] = useState(shippingAddress.address || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || "");
  const [province, setProvince] = useState(shippingAddress.province || "");
  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(saveShippingAddress({ address, city, postalCode, province }));
    history.push("/payment");
  }
  return (
    <FormContainer>
      <h2>收货地址</h2>
      <Form>
        <Form.Group controlId="province">
          <Form.Label>省份：</Form.Label>
          <Form.Control required type="text" placeholder="请输入省份" value={province} onChange={(e) => setProvince(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label>所在地区：</Form.Label>
          <Form.Control type="text" placeholder="请输入城市" value={city} onChange={(e) => setCity(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>详细地址：</Form.Label>
          <Form.Control type="text" placeholder="请输入地址" value={address} onChange={(e) => setAddress(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="postalCode">
          <Form.Label>邮编：</Form.Label>
          <Form.Control type="text" placeholder="请输入邮编" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
        </Form.Group>

        <Button variant="primary" onClick={onSubmit}>继续下一步</Button>
      </Form>
    </FormContainer>
  )
}
export default ShippingPage
