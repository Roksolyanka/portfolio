import { useState } from 'react';

import useTheme from '../../hooks/useTheme';

import { AnimatedIcon, ThemeTogglerButton } from './styled';
import theme from '../../theme';

const ThemeToggler = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleToggleTheme = () => {
    toggleTheme();
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
      onClick={handleToggleTheme}
    >
      <AnimatedIcon
        className={isAnimating ? 'animate' : ''}
        name={isDarkTheme ? 'icon-sun-fill' : 'icon-moon-fill'}
        width='30px'
        height='30px'
        fill={theme.colors.blue[5]}
      ></AnimatedIcon>
    </ThemeTogglerButton>
  );
};

export default ThemeToggler;
