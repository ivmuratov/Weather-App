import themeReducer, { themeSlice, ThemeState } from './themeReducer';

import { darkTheme, lightTheme } from '../../../styles/theme';

const { toggleOnDark } = themeSlice.actions;

describe('переключить тему', () => {
  test('темная тема', () => {
    const lightThemeState: ThemeState = {
      theme: lightTheme,
    };
    expect(themeReducer(lightThemeState, toggleOnDark(true))).toEqual({ theme: darkTheme });
  });
  test('светлая тема', () => {
    const darkThemeState: ThemeState = {
      theme: darkTheme,
    };
    expect(themeReducer(darkThemeState, toggleOnDark(false))).toEqual({ theme: lightTheme });
  });
});
