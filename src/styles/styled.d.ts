import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: string;
    primaryColor: string;
    headerFontColor: string;
    primaryFontColor: string;
    secondaryFontColor: string;
  }
}