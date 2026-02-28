import { createContext, FC, ReactNode, useEffect, useState } from 'react';

import { ThemeContextProps } from '../types';
import { darkTheme, lightTheme } from '../theme';

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('isDarkTheme');
    try {
      return savedTheme ? JSON.parse(savedTheme) : false;
    } catch {
      return false;
    }
  });

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkTheme);
    localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  const currentTheme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider
      value={{ ...currentTheme, isDarkTheme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
