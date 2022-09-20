import 'styled-components/macro';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    color: string;
    button: {
      boxShadow: string;
    };
    card: {
      boxShadow: string;
    };
  }
}
