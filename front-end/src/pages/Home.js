import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product.js";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products")
      setProducts(data);
    };
    fetchData();
  }, [])




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
