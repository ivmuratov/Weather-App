import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DefaultTheme } from 'styled-components';

import { darkTheme, lightTheme } from '../../styles/theme';

interface ThemeState {
  theme: DefaultTheme;
}

const initialState: ThemeState = {
  theme: lightTheme,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleOnDark(state, action: PayloadAction<boolean>) {
      action.payload === true ? (state.theme = darkTheme) : (state.theme = lightTheme);
    },
  },
});

export default themeSlice.reducer;
