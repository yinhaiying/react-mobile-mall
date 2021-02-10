import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constant/cartConstant.js";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      // 判断购物车中产品是否已经存在
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) => x.product === existItem.product ? item : x)
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item]
        }
      }

    case CART_REMOVE_ITEM:
    default:
      return state;
  }
}
