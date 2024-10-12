import { useState } from 'react';

import { AnimatedIcon, ThemeTogglerButton } from './styled';
import theme from '../../theme';

const ThemeToggler = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
    document.body.classList.toggle('dark', !isDarkTheme);
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <ThemeTogglerButton
      type='button'
      role='switch'
      aria-label='theme mode switch'
      onClick={toggleTheme}
    >
      <AnimatedIcon
        className={isAnimating ? 'animate' : ''}
        name={isDarkTheme ? 'icon-sun-fill' : 'icon-moon-fill'}
        width='30px'
        height='30px'
        fill={theme.colors.blue[1]}
      ></AnimatedIcon>
    </ThemeTogglerButton>
  );
};

export default ThemeToggler;
