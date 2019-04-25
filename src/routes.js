import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router';

import App from './components/App';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import CookingPage from './components/CookingPage';
import ProductSearch from './components/ProductSearch';
import HomePage from './components/HomePage';
import PromotionsPage from './components/PromotionsPage'
import PromotionDetail from './components/PromotionDetail';
import RegisterPage from'./components/RegisterPage';

const Routes = (
  <Route component={App}>
      <Route path="/" component={HomePage} />
      <Route path="/register" component={RegisterPage}/>
      <Route path="/product-list" component={ProductList} />
      <Route path="/product-search" component={ProductSearch} />
      <Route path="/cooking" component={CookingPage} />
      <Route path="/product/:sku" component={ProductDetail} />
      <Route path="/promotions" component={PromotionsPage} />
      <Route path="/promotion/:id" component={PromotionDetail}/>
  </Route>
);

export default Routes;