import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';


const GlobalStyle = createGlobalStyle`
  body {
    padding: 0px;
    margin: 0px;
    
  }
 
 * {
   box-sizing: border-box;
 }
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
