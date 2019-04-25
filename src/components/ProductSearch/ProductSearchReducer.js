import { combineReducers } from 'redux';

const productListSearch = (state = [], action) => {
    switch (action.type) {
      case 'GET_PRODUCT_LIST_SEARCH_REQUEST':
        return action.payload;
      case 'GET_PRODUCT_LIST_SEARCH_SUCCESS':
        return action.payload ? action.payload : 'notfound';
      default:
        return state;
    }
};

export default combineReducers({
    productListSearch,
  });

export const selectProductListSearch = (state) => state.ProductSearchReducer.productListSearch;