import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { productListReducer, productDetailsReducer } from "./reducers/productReducers.js"
import { cartReducer } from "./reducers/cartReducers.js";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers.js";

// 把所有的操作state的reducer合并
const reducers = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer
});

const cartItemsFromStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null

// 初始值是页面初始化或者页面刷新时还保留的数据。主要是本地存储的数据
const initialState = {
  cart: {
    cartItems: cartItemsFromStorage
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
