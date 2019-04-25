import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory, applyRouterMiddleware} from 'react-router';
import { Provider } from 'react-redux'
import configureStore from './store';

import Routes from './routes';
import './global-fonts';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router
      history={browserHistory}
    >
      {Routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);

module.hot.accept();