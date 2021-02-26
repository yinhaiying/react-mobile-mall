import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAIL
} from "../constant/productConstant.js";

/*
获取所有产品的reducer
*/

export const productListReducer = (state = { products: [] }, action) => {
  // reducre中通常需要根据action的类型来执行不同的操作:
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {
        loading: true,
        products: []
      }
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload
      }
    case PRODUCT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}


/*
获取单个产品的reducer
*/

export const productDetailsReducer = (state = { product: {} }, action) => {
  // reducre中通常需要根据action的类型来执行不同的操作:
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
        ...state
      }
    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload
      }
    case PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}


// 获取评分排名前三的产品
export const productTopRatedReducer = (state = { products: [] }, action) => {
  // reducre中通常需要根据action的类型来执行不同的操作:
  switch (action.type) {
    case PRODUCT_TOP_REQUEST:
      return {
        loading: true,
        products: []
      }
    case PRODUCT_TOP_SUCCESS:
      return {
        loading: false,
        products: action.payload
      }
    case PRODUCT_TOP_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
