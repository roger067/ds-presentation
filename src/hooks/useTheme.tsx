import { THEME_KEY, THEME_MODE } from '../constants/theme';
import { THEME } from '../theme';

export const useTheme = () => {
  const themeMode: (typeof THEME_MODE)[keyof typeof THEME_MODE] =
    localStorage.getItem(THEME_KEY) || THEME_MODE.LIGHT;

  const setThemeMode = (
    theme: (typeof THEME_MODE)[keyof typeof THEME_MODE]
  ) => {
    localStorage.setItem(THEME_KEY, theme);
  };

  const theme = THEME[themeMode as keyof typeof THEME];

  return { theme, themeMode, setThemeMode };
};
