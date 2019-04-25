import { combineReducers } from 'redux';

const cookingList = (state = [], action) => {
    switch (action.type) {
      case 'GET_COOKING_REQUEST':
        return action.payload;
      case 'GET_COOKING_SUCCESS':
        return action.payload ? action.payload : 'notfound';
      default:
        return state;
    }
};

export default combineReducers({
    cookingList
  });

export const selectCookingList = (state) => state.CookingPageReducer.cookingList;