import 'array.prototype.flatmap/auto'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'
import ReactModal from 'react-modal'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactModal.setAppElement('#root');

ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>,
  document.getElementById('root'));
