import axios from "axios";

import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constant/cartConstant.js";


export const addToCart = (id, quality) => async (dispatch, getState) => {
  try {
    const { data } = axios.get(`/api/products/${id}`);
    didptch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        quality
      }
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
  } catch (error) {

  }
}
