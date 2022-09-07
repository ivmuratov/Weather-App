import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  background: 'linear-gradient(-45deg, #1c92d2, #f2fcfe)',
  color: '#231815',
  button: {
    boxShadow: '0px 0px 40px -10px rgba(34, 60, 80, 0.5)',
  },
  card: {
    boxShadow: '0px 0px 20px -7px rgba(0, 0, 0, 0.5);',
  },
};

export const darkTheme: DefaultTheme = {
  background: 'linear-gradient(100deg, #2980b9, #2c3e50)',
  color: '#F3F3F3',
  button: {
    boxShadow: '0px 0px 40px -10px rgba(255, 255, 255, 0.5)',
  },
  card: {
    boxShadow: '0px 0px 20px -7px rgba(193, 193, 193, 0.5);',
  },
};
