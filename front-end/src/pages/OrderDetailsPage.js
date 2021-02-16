import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, ListGroup, Row, Col, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderDetails } from '../store/actions/orderActions.js'
import Message from '../components/Message.js'
import Loading from '../components/Loading.js'

const OrderDetailsPage = ({ match }) => {
  const orderId = match.params.id
  const dispatch = useDispatch()

  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails
  // 计算价格
  if (!loading) {
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2)
    }
    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    )
  }
  useEffect(() => {
    if (!order || order._id !== orderId) {
      dispatch(getOrderDetails(orderId))
    }
  }, [order, orderId])
  return loading ? (
    <Loading />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) :
      (
        <div>
          <h3>订单号：{order._id}</h3>
          <Row>
            <Col md={8}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h2>收货地址</h2>
                  <p>
                    <strong>收件人地址：</strong>
                  </p>
                  <p>
                    <strong>姓名:</strong>
                    {order.user.name}
                  </p>
                  <p>
                    {' '}
                    <strong>邮箱:</strong>
                    <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
                  </p>
                  <p>
                    {order.shippingAddress.province},{order.shippingAddress.city},
                {order.shippingAddress.address},
                {order.shippingAddress.postalCode}
                  </p>
                  {order.isDelivered ? (
                    <Message variant='success'>
                      发货时间：{order.DeliveredAt}
                    </Message>
                  ) : (
                      <Message variant='danger'>未发货</Message>
                    )}
                </ListGroup.Item>

                <ListGroup.Item>
                  <h2>支付方式</h2>
                  <p>
                    <strong>支付方法：</strong>
                    {order.paymentMethod}
                  </p>
                  {order.isPaid ? (
                    <Message variant='success'>支付时间：{order.PaidAt}</Message>
                  ) : (
                      <Message variant='danger'>待支付</Message>
                    )}
                </ListGroup.Item>

                <ListGroup.Item>
                  <h2>产品订单</h2>
                  {order.orderItems.length === 0 ? (
                    <Message>购物车为空</Message>
                  ) : (
                      <ListGroup variant='flush'>
                        {order.orderItems.map((item, index) => (
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
                      <Col>${order.itemsPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>运费</Col>
                      <Col>${order.shippingPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>订单总价</Col>
                      <Col>${order.totalPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </div>
      )
}

export default OrderDetailsPage
