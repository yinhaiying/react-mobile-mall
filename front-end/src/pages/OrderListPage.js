import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, ListGroup, Row, Col, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Message from '../components/Message'

const OrderListPage = ({ history }) => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  //计算价格
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }
  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  )

  cart.shippingPrice = addDecimals(cart.itemsPrice > 5000 ? 0 : 20)

  cart.totalPrice = addDecimals(
    Number(cart.itemsPrice) + Number(cart.shippingPrice)
  )

  //提交订单函数
  const placeorderHandler = () => {
    console.log("提交订单")
  }
  return (
    <>
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>收货地址</h3>
              <p>
                <strong>收件人地址：</strong>
                {cart.shippingAddress.province},{cart.shippingAddress.city},
                {cart.shippingAddress.address},{cart.shippingAddress.postalCode}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h3>支付方式</h3>
              <strong>支付方式：</strong>
              {cart.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h3>产品订单</h3>
              {cart.cartItems.length === 0 ? (
                <Message>购物车为空</Message>
              ) : (
                  <ListGroup variant='flush'>
                    {cart.cartItems.map((item, index) => (
                      <ListGroup.Item key={index}>
                        <Row>
                          <Col md={1}>
                            <Image
                              src={item.image}
                              alt={item.name}
                              fluid
                              rounded
                            />
                          </Col>
                          <Col>
                            <Link to={`/products/${item.product}`}>
                              {item.name}
                            </Link>
                          </Col>
                          <Col md={4}>
                            {item.quantity} X {item.price} = {item.quantity * item.price}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>订单详情</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>产品总价</Col>
                  <Col style={{ color: "#e2231a", "fontWeight": "bold", "fontSize": "16px" }}>￥{cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>运费</Col>
                  <Col style={{ color: "#e2231a", "fontWeight": "bold", "fontSize": "16px" }}>￥{cart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>订单总价</Col>
                  <Col style={{ color: "#e2231a", "fontWeight": "bold", "fontSize": "16px" }}>￥{cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              {/* <ListGroup.Item>
                {error && <Message variant='danger'>{error}</Message>}
              </ListGroup.Item> */}
              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block'
                  onClick={placeorderHandler}
                  disabled={cart.cartItems === 0}
                >
                  提交订单
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default OrderListPage
