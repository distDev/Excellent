import {} from 'styled-components';
import { ThemeTypes } from './light';



declare module 'styled-components' {
  export interface DefaultTheme extends ThemeTypes {}
}






