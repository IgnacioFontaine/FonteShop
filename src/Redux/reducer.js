import ACTION_TYPES from "./actionsTypes";

//Config initialState
const initialState = {
  all_products: [],
  like_products: [],
  category_product: [],
  shop_product: [],
  user:null,
  error: false,
  errormsg: {},
};

//Config reducer
const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_SHOP:
      return {
        ...state,
        shop_product:[...state.shop_product, action.payload]
      }
    
    case ACTION_TYPES.REMOVE_TO_SHOP:
      const index = state.shop_product.findIndex(shopItem => shopItem.id == action.payload.id)
      let newState = [...state.shop_product]
      if (index >= 0) {
        newState.splice(index, 1);
      }
      return {
        ...state,
         shop_product: newState
      };
    
    case ACTION_TYPES.ADD_TO_LIKE:
      return {
        ...state,
        like_products:[...state.like_products, action.payload]
      }
    case ACTION_TYPES.REMOVE_TO_LIKE:
      const indexLike = state.like_products.findIndex(likeItem => likeItem.id == action.payload.id)
      let newStateLike = [...state.like_products]
      if (indexLike >= 0) {
        newStateLike.splice(indexLike, 1);
      }
      return {
        ...state,
         like_product: newStateLike
      };
    
    case ACTION_TYPES.ERROR:
      return {
        ...state,
        error: true,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;