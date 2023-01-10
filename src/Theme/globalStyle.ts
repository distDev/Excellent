import { createGlobalStyle } from 'styled-components';
import { ThemeTypes } from './light';

const GlobalStyle = createGlobalStyle<{ theme: ThemeTypes }>`

  @font-face {
    font-family: 'Euclid Circular A';
    src: url('EuclidCircularA-Bold.eot');
    src: local('Euclid Circular A Bold'), local('EuclidCircularA-Bold'),
        url('EuclidCircularA-Bold.eot?#iefix') format('embedded-opentype'),
        url('EuclidCircularA-Bold.woff2') format('woff2'),
        url('EuclidCircularA-Bold.woff') format('woff'),
        url('EuclidCircularA-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: 'Euclid Circular A';
    src: url('EuclidCircularA-Light.eot');
    src: local('Euclid Circular A Light'), local('EuclidCircularA-Light'),
        url('EuclidCircularA-Light.eot?#iefix') format('embedded-opentype'),
        url('EuclidCircularA-Light.woff2') format('woff2'),
        url('EuclidCircularA-Light.woff') format('woff'),
        url('EuclidCircularA-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Euclid Circular A';
    src: url('EuclidCircularA-Regular.eot');
    src: local('Euclid Circular A Regular'), local('EuclidCircularA-Regular'),
        url('EuclidCircularA-Regular.eot?#iefix') format('embedded-opentype'),
        url('EuclidCircularA-Regular.woff2') format('woff2'),
        url('EuclidCircularA-Regular.woff') format('woff'),
        url('EuclidCircularA-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Euclid Circular A';
    src: url('EuclidCircularA-SemiBold.eot');
    src: local('Euclid Circular A SemiBold'), local('EuclidCircularA-SemiBold'),
        url('EuclidCircularA-SemiBold.eot?#iefix') format('embedded-opentype'),
        url('EuclidCircularA-SemiBold.woff2') format('woff2'),
        url('EuclidCircularA-SemiBold.woff') format('woff'),
        url('EuclidCircularA-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Euclid Circular A';
    src: url('EuclidCircularA-Medium.eot');
    src: local('Euclid Circular A Medium'), local('EuclidCircularA-Medium'),
        url('EuclidCircularA-Medium.eot?#iefix') format('embedded-opentype'),
        url('EuclidCircularA-Medium.woff2') format('woff2'),
        url('EuclidCircularA-Medium.woff') format('woff'),
        url('EuclidCircularA-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}
  
  body {
    padding: 0px;
    margin: 0px;
    background: ${({ theme: { background } }) => background.body};
    width: 100%;
    font-family: 'Euclid Circular A', sans-serif;
    position: relative;
  }

  button {
    cursor: pointer;
  }
 
 * {
   box-sizing: border-box;
   margin: 0px;
   padding: 0px;
   
 }
`;

export default GlobalStyle;
