import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DefaultTheme } from 'styled-components';

import { darkTheme, lightTheme } from '../../../styles/theme';

export interface ThemeState {
  theme: DefaultTheme;
}

const initialState: ThemeState = {
  theme: lightTheme,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleOnDark(state, action: PayloadAction<boolean>) {
      action.payload ? (state.theme = darkTheme) : (state.theme = lightTheme);
    },
  },
});

export const { toggleOnDark } = themeSlice.actions;

export default themeSlice.reducer;
