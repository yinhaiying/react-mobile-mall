import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { productListReducer } from "./reducers/productReducers.js"

// 把所有的操作state的reducer合并
const reducers = combineReducers({
  productList: productListReducer
});

const initialState = {};

const middleware = [thunk];


const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)


export default store;
