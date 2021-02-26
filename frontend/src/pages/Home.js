import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../store/actions/productActions.js";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product.js";
import Loading from "../components/Loading.js"
import Message from "../components/Message.js";
import ProductsCarousel from '../components/ProductsCarousel'
const Home = ({ match }) => {

  const keyword = match.params.keyword;
  console.log("keyword:", keyword)

  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword))
  }, [dispatch, keyword]);

  return (
    <>
      {
        !keyword && <ProductsCarousel></ProductsCarousel>
      }
      <h1>最新产品</h1>
      {
        loading ? (
          <Loading></Loading>
        ) : error ? (<Message variant="danger">{error}</Message>) : (<Row>
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
