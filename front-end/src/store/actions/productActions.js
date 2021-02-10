
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from "../constant/productConstant.js";
import axios from "axios";


/*
获取所有产品的action
*/
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("/api/products")
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    console.log("error:", error.response)
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.response.data.message
    }
    );
  }
}
