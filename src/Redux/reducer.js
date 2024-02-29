import ACTION_TYPES from './actionTypes'

//Config initialState
const initialState = {
  all_products: [],
  like_products: [],
  category_product: [],
  shop_product:[],
};

//Config reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {

    default:
      return {
        ...state,
      };
  }
};

export default reducer;