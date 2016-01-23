import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from './containers/App';
import DevTools from './containers/DevTools';
import configureStore from './configureStore';
import './style/style.less';

const store = configureStore();

ReactDOM.render((
  <div>
    <Provider store={store}>
      <App />
    </Provider>
    <DevTools store={store} />
  </div>

), document.getElementById('react-content'));
