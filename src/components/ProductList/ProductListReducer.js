import { combineReducers } from 'redux';

const productList = (state = [], action) => {
    switch (action.type) {
      case 'GET_PRODUCT_LIST_REQUEST':
        return action.payload;
      case 'GET_PRODUCT_LIST_SUCCESS':
        return action.payload ? action.payload : 'notfound';
      default:
        return state;
    }
};

const category = (state = [], action) => {
    switch (action.type) {
      case 'GET_CATEGORY_REQUEST':
        return action.payload;
      case 'GET_CATEGORY_SUCCESS':
        return action.payload ? action.payload : 'notfound';
      default:
        return state;
    }
};

export default combineReducers({
    productList,
    category,
  });

export const selectProductList = (state) => state.ProductListReducer.productList;
export const selectCategory = (state) => state.ProductListReducer.category;