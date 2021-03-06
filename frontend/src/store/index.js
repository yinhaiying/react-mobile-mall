import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { productListReducer, productDetailsReducer, productTopRatedReducer } from "./reducers/productReducers.js"
import { cartReducer } from "./reducers/cartReducers.js";

import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer
} from "./reducers/userReducers.js";


import { orderCreateReducer, orderDetailsReducer, orderPayReducer } from "./reducers/orderReducers.js";

// 把所有的操作state的reducer合并
const reducers = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productTopRated: productTopRatedReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer
});

const cartItemsFromStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
const cartShippingAddressFromStorage = localStorage.getItem("shippingAddress") ? JSON.parse(localStorage.getItem("shippingAddress")) : {}
const paymentMethodFormStorage = localStorage.getItem("paymentMethod") ? JSON.parse(localStorage.getItem("paymentMethod")) : ""

const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null

// 初始值是页面初始化或者页面刷新时还保留的数据。主要是本地存储的数据
const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: cartShippingAddressFromStorage,
    paymentMethod: paymentMethodFormStorage
  },
  userLogin: {
    userInfo: userInfoFromStorage
  }
};

const middleware = [thunk];


const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)


export default store;
