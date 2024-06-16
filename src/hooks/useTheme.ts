import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('Theme context is not loaded');
  }

  return themeContext;
};
