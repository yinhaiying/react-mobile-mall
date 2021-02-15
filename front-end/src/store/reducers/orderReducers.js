import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
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
