import { combineReducers } from 'redux';

const productDetail = (state = [], action) => {
    switch (action.type) {
      case 'GET_PRODUCT_DETAIL_REQUEST':
        return action.payload;
      case 'GET_PRODUCT_DETAIL_SUCCESS':
        return action.payload ? action.payload[Object.keys(action.payload)[0]] : 'notfound';
      default:
        return state;
    }
  };

export default combineReducers({
    productDetail,
  });

export const selectProductDetail = (state) => state.ProductDetailReducer.productDetail;