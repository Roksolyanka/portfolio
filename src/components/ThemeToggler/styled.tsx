import styled, { keyframes } from 'styled-components';
import { Icon } from '../Icon';

const appear = keyframes`
  from {
    opacity: 0;
    transform: scale(0.2) rotate(0deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(360deg);
  }
`;

export const ThemeTogglerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const AnimatedIcon = styled(Icon)`
  &.animate {
    animation: ${appear} 0.5s ease forwards;
  }
`;
