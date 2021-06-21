import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

const AppPage = App as any;

ReactDOM.render(
  <Provider store={store}>
    <AppPage />
  </Provider>,
  document.getElementById('root'),
);
