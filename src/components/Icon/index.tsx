import React from 'react';

import sprite from '../../assets/sprite.svg';

interface IconProps {
  name: string;
  width?: string;
  height?: string;
  fill?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  width = '24px',
  height = '24px',
  fill = '#6a4b42',
  className = '',
}) => (
  <svg width={width} height={height} fill={fill} className={className}>
    <use href={`${sprite}#${name}`} />
  </svg>
);
