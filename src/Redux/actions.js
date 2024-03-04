import ACTION_TYPES from "./actionsTypes"

//Compras Actions
export const addToShop = ({
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images
  }) => {
  
  return async (dispatch) => {
    try {
      dispatch({
        type: ACTION_TYPES.ADD_TO_SHOP,
        payload: {
          id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images
  },
      });
    } catch (error) {
      return dispatch({ type: ACTION_TYPES.ERROR, payload: error });
    }
  };
};

export const removeToShop = (id) => {
  
  return async (dispatch) => {
    try {
      dispatch({
        type: ACTION_TYPES.REMOVE_TO_SHOP,
        payload: {id},
      });
    } catch (error) {
      return dispatch({ type: ACTION_TYPES.ERROR, payload: error });
    }
  };
};

//Favoritos Actions
export const addToLike= ({
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images
  }) => {
  
  return async (dispatch) => {
    try {
      dispatch({
        type: ACTION_TYPES.ADD_TO_LIKE,
        payload: {
          id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images
  },
      });
    } catch (error) {
      return dispatch({ type: ACTION_TYPES.ERROR, payload: error });
    }
  };
};

export const removeToLike = (id) => {
  
  return async (dispatch) => {
    try {
      dispatch({
        type: ACTION_TYPES.REMOVE_TO_LIKE,
        payload: {id},
      });
    } catch (error) {
      return dispatch({ type: ACTION_TYPES.ERROR, payload: error });
    }
  };
};

//User actions

export const setUser = (user) => {
  
  return async (dispatch) => {
    try {
      dispatch({
        type: ACTION_TYPES.SET_USER,
        payload: user,
      });
    } catch (error) {
      return dispatch({ type: ACTION_TYPES.ERROR, payload: error });
    }
  };
};

export const removeStore = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ACTION_TYPES.REMOVE_STORE,
        payload: {},
      });
    } catch (error) {
      return dispatch({ type: ACTION_TYPES.ERROR, payload: error });
    }
  };
};



