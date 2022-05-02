import {} from 'styled-components';
import { ThemeTypes } from './light';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeTypes {} // extends the global DefaultTheme with our ThemeType.
}
