import 'styled-components/macro';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    color: string;
    arrowButton: {
      boxShadow: string;
    };
    card: {
      boxShadow: string;
    };
  }
}
