import ACTION_TYPES from "./actionsTypes";

//Config initialState
const initialState = {
  all_products: [],
  like_products: [],
  category_product: [],
  shop_product: [],
  error: false,
  errormsg: {},
};

//Config reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_SHOP:
      return {
        ...state,
        shop_product:[...state.shop_product, action.payload]
      }
    case ACTION_TYPES.REMOVE_TO_SHOP:
      return {
        ...state,
         shop_product: state.shop_product.filter(shop_product => shop_product.id !== action.payload)
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;