import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
} from "../constant/orderConstant.js";

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        isloading: true,
      }
    case ORDER_CREATE_SUCCESS:
      return {
        isloading: false,
        order: action.payload,
        success: true
      }
    case ORDER_CREATE_FAIL:
      return {
        isloading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

// 获取订单reducer
export const orderDetailsReducer = (state = { loading: true, orderItems: [], shippingAddress: {} }, action) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return {
        loading: true,
        ...state
      }
    case ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload
      }
    case ORDER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}
// 支付完成之后的订单跟新 reducer
export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return {
        loading: true,
      }
    case ORDER_PAY_SUCCESS:
      return {
        loading: false,
        // order: action.payload,
        success: true
      }
    case ORDER_PAY_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case ORDER_PAY_RESET:
      return {}
    default:
      return state;
  }
}
