import { createContext, FC, ReactNode, useEffect, useState } from 'react';

import { ThemeContextProps } from '../interfaces';
import { darkTheme, lightTheme } from '../theme';

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('isDarkTheme');
    return savedTheme ? JSON.parse(savedTheme) : false;
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
