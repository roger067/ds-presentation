import { useState, useEffect } from 'react';
import { THEME_KEY, THEME_MODE } from '../constants/theme';

export const useTheme = () => {
  const [theme, setThemeState] = useState<
    (typeof THEME_MODE)[keyof typeof THEME_MODE]
  >(() => localStorage.getItem(THEME_KEY) || THEME_MODE.LIGHT);

  useEffect(() => {
    if (theme === THEME_MODE.DARK)
      return document.body.classList.add(THEME_MODE.DARK);

    return document.body.classList.remove(THEME_MODE.DARK);
  }, [theme]);

  const setTheme = (newTheme: (typeof THEME_MODE)[keyof typeof THEME_MODE]) => {
    localStorage.setItem(THEME_KEY, newTheme);
    setThemeState(newTheme);
  };

  return { theme, setTheme };
};
