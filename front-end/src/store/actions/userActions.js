import axios from "axios"
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
import { api_users_login, api_users_register, api_users_profile } from "../../api/users.js"



// 用户注册action
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const { data } = await axios.post(api_users_register, { name, email, password });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    // 注册成功之后用户自动登陆
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL, payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    })
  }
}

// 用户登陆action
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const { data } = await axios.post(api_users_login, { email, password });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL, payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    })
  }
}


// 用户退出action
export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGOUT });
    localStorage.removeItem("userInfo")
  } catch (error) {
    console.log("error:", error)
  }
}



// 获取用户个人信息
export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });
    // 在action中获取state需要依赖getState
    const { userLogin: { userInfo } } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.get(`api/users/${id}`, config);
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL, payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    })
  }
}
