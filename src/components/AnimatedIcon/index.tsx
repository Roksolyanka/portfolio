import { Icon } from '../Icon';
import { AnimatedIconProps } from '../../interfaces';

import styled, { css } from 'styled-components';

const animation = ({
  animName,
  duration,
  timingFunction,
  fillMode,
}: Omit<AnimatedIconProps, 'name'>) => css`
  animation: ${animName} ${duration} ${timingFunction} ${fillMode || ''};
`;

export const AnimatedIcon = styled(Icon)<AnimatedIconProps>`
  &.animate {
    ${({ animName, duration, timingFunction, fillMode }) =>
      animation({ animName, duration, timingFunction, fillMode })}
  }
`;
