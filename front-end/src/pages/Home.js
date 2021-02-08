import React from 'react'
import products from "../data/products.js";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product.js";

const Home = () => {
  return (
    <>
      <h1>最新产品</h1>
      <Row>
        {products.map((product) =>
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        )}
      </Row>
    </>
  )
}

export default Home
