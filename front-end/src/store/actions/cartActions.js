import axios from "axios";

import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD
} from "../constant/cartConstant.js";

/*
从购物车添加产品action


*/
export const addToCart = (id, quantity) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        quantity
      }
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
  } catch (error) {
    throw new Error(error);
  }
}


/*
从购物车删除产品action

*/

export const removeFromCart = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: id
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
  } catch (error) {
    throw new Error(error);
  }
}


// 保存收货地址
export const saveShippingAddress = (data) => async (dispatch) => {
  try {
    dispatch({
      type: CART_SAVE_SHIPPING_ADDRESS,
      payload: data
    });
    localStorage.setItem("shippingAddress", JSON.stringify(data))
  } catch (error) {
    throw new Error(error);
  }
}


// 保存支付方式
export const savePaymentMethod = (data) => async (dispatch) => {
  try {
    dispatch({
      type: CART_SAVE_PAYMENT_METHOD,
      payload: data
    });
    localStorage.setItem("paymentMethod", JSON.stringify(data))
  } catch (error) {
    throw new Error(error);
  }
}
