import { combineReducers } from 'redux';



const promotions = (state = [], action) => {
    switch (action.type) {
      case 'GET_PROMOTIONS_REQUEST':
        return action.payload;
      case 'GET_PROMOTIONS_SUCCESS':
        return action.payload ? action.payload : 'notfound';
      default:
        return state;
    }
};

export default combineReducers({
    promotions,
  });

export const selectPromotions = (state) => state.PromotionsReducer.promotions;
