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
    case ACTION_TYPES.GET_ALL_PRODUCTS:
      return {
        
      }

    default:
      return {
        ...state,
      };
  }
};

export default reducer;