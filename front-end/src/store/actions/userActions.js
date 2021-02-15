import axios from "axios"
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT } from "../constant/userConstant.js";

import { api_users_login } from "../../api/users.js"

/*
用户登陆action
*/

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
