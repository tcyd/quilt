import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from './containers/App';
import DevTools from './containers/DevTools';
import configureStore from './store/configureStore';
import './style/style.less';

const store = configureStore();

const showDevTools = process.env.NODE_ENV == 'production' ? null : <DevTools store={store} />;

ReactDOM.render((
  <div>
    <Provider store={store}>
      <App />
    </Provider>
    { showDevTools }
  </div>

), document.getElementById('react-content'));
