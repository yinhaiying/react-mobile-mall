import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL

} from "../constant/userConstant.js";




// 用户登陆reducer
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload
      }
    case USER_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case USER_LOGOUT:
      return {

        userInfo: null
      }
    default:
      return state

  }
}

// 用户注册reducer
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true }
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload
      }
    case USER_REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

// 用户详情reducer
export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { loading: true, ...state }
    case USER_DETAILS_SUCCESS:
      return {
        loading: false,
        user: action.payload
      }
    case USER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
