import React from 'react'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from 'react-bootstrap';
import Rating from "../components/Rating.js";
import { Link } from "react-router-dom";
import products from "../data/products.js";
function ProductPage({ match }) {
  const product = products.find((product) => product._id === match.params.id)
  return (
    <>
      <Link to="/" className="btn btn-dark my-3">返回主页</Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews}条评论`}
              />
            </ListGroup.Item>
            <ListGroup.Item>价格：¥{product.price}</ListGroup.Item>
            <ListGroup.Item>描述：¥{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>价格：</Col>
                  <Col>
                    <strong>¥{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>库存：</Col>
                  <Col>{product.countInStock > 0 ? '有货' : '没货'}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  添加到购物车
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductPage
