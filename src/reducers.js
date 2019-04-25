import { combineReducers } from 'redux';
import ProductDetailReducer from './components/ProductDetail/ProductDetailReducer';
import ProductListReducer from './components/ProductList/ProductListReducer';
import CookingPageReducer from './components/CookingPage/CookingPageReducer';
import ProductSearchReducer from './components/ProductSearch/ProductSearchReducer';
import PromotionsReducer from './components/PromotionsPage/PromotionsReducer';
export default combineReducers({
    ProductDetailReducer,
    ProductListReducer,
    CookingPageReducer,
    ProductSearchReducer,
    PromotionsReducer,
});