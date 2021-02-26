import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap"
import Loading from "./Loading"
import Message from "./Message"
import { listTopProducts } from "../store/actions/productActions"

const ProductsCarousel = () => {
  const dispatch = useDispatch();
  const productTopRated = useSelector(state => state.productTopRated);
  const { loading, error, products } = productTopRated;
  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);
  return loading ? (
    <Loading />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
        <Carousel pause='hover' className='bg-dark' interval="5000000">
          {products.map((product) => (
            <Carousel.Item key={product._id}>
              <Link to={`/products/${product._id}`}>
                <Image src={product.image} alt={product.name} fluid style={{ display: "block", "text-align": "center" }} />
                <Carousel.Caption className='carousel-caption'>
                  <h2>
                    {product.name} (¥{product.price})
              </h2>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      )
}
export default ProductsCarousel
