import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL
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
