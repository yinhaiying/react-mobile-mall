import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../store/actions/productActions.js";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product.js";

const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);

  return (
    <>
      <h1>最新产品</h1>
      {
        loading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : error ? error : (<Row>
          {products.map((product) =>
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          )}
        </Row>)
      }
    </>
  )
}

export default Home
