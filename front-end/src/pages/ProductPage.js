import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../store/actions/productActions.js";
import Loading from "../components/Loading.js"
import Message from "../components/Message.js"
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form
} from 'react-bootstrap';
import Rating from "../components/Rating.js";
import { Link } from "react-router-dom";
function ProductPage({ history, match }) {
  const [quality, setQuality] = useState(1);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match]);
  const { loading, product, error } = useSelector((state) => state.productDetails);

  const addToCart = () => {
    history.push(`/cart/${match.params.id}?quality=${quality}`)
  }

  return (
    <>
      <Link to="/" className="btn btn-dark my-3">返回主页</Link>
      {
        loading ? (<Loading>加载中</Loading>) : error ?
          (<Message>{error}</Message>) : (
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
                    {
                      product.rating && <Rating
                        value={product.rating}
                        text={`${product.numReviews}条评论`}
                      />
                    }
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
                      <Row>
                        <Col>数量：</Col>
                        <Col>
                          <Form.Control as="select" value={quality} onChange={(e) => setQuality(e.target.value)}>
                            {
                              [...Array(product.countInStock).keys()].map((i) => (<option key={i + 1} value={i + 1}>{i + 1}</option>))
                            }
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Button
                        className='btn-block'
                        type='button'
                        disabled={product.countInStock === 0}
                        onClick={addToCart}
                      >
                        添加到购物车
                  </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          )
      }
    </>
  )
}

export default ProductPage
