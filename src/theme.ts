// @ts-expect-error - Package without types
import { BACKGROUND_DEFAULT } from '@getpingback/design-tokens';
// @ts-expect-error - Package without types
import { BACKGROUND_DEFAULT as BACKGROUND_DEFAULT_DARK } from '@getpingback/design-tokens/js/dark';

export const THEME = {
  light: {
    colors: {
      primary: BACKGROUND_DEFAULT,
      secondary: '#3b82f6',
      tertiary: '#f8fafc',
    },
    fonts: {
      header: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      text: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    },
  },
  dark: {
    colors: {
      primary: BACKGROUND_DEFAULT_DARK,
      secondary: '#3b82f6',
      tertiary: '#f8fafc',
    },
    fonts: {
      header: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      text: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    },
  },
};
