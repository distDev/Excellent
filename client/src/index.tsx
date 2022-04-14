import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
  
  body {
    padding: 0px;
    margin: 0px;
    margin-bottom: 80px;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    position: relative;
    
  }
 
 * {
   box-sizing: border-box;
   margin: 0px;
   padding: 0px;
 }
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
