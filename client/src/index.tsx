import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './Theme/globalStyle';
import { Provider } from 'react-redux';
import { store } from './State/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
