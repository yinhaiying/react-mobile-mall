import React from 'react'
import { Card } from "react-bootstrap";
function Product({ product }) {
  return (
    <>
      <Card className="my-3 py-3 rounded">
        <a href={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top"></Card.Img>
        </a>
        <Card.Body>
          <a href={`/product/${product._id}`}></a>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text as="div">
            <div>评分</div>
          </Card.Text>
          <Card.Text as="h3">￥{product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Product
