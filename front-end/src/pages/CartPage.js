import React from 'react'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/actions/cartActions.js";
const CartPage = ({ match, location, history }) => {
  const dispatch = useDispatch();
  const id = match.params.id;
  const quantity = location.search ? Number(location.search.split("=")[1]) : 1;

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, quantity));
    }
  }, [dispatch, id, quantity]);
  const cart = useSelector((state) => state.cart);
  console.log("cart:", cart)
  return (
    <div>
      Cart
    </div>
  )
}

export default CartPage
