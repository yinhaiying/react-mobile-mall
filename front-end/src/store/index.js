import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


const reducers = combineReducers({});  // 把所有的操作state的reducer合并

const initialState = {};

const middleware = [thunk];


const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)


export default store;
