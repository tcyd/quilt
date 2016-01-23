import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux'
import './common/lib';
import App from './containers/App';
import configureStore from './configureStore'
import DevTools from './containers/DevTools'

const store = configureStore();

ReactDOM.render((
  <div>
    <Provider store={store}>
      <App />
    </Provider>
    <DevTools store={store} />
  </div>

), document.getElementById('react-content'));
