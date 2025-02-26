import { FC } from 'react';

import { IconProps } from '../../interfaces';
import sprite from '../../assets/sprite.svg';
import { useTheme } from '../../hooks/useTheme';

export const Icon: FC<IconProps> = ({
  name,
  width = '24px',
  height = '24px',
  fill,
  className = '',
}) => {
  const theme = useTheme();
  const fillColor = fill || theme.colors.green[3];

  return (
    <svg width={width} height={height} fill={fillColor} className={className}>
      <use href={`${sprite}#${name}`} />
    </svg>
  );
};
