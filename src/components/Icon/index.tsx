import React from 'react';

import sprite from '../../assets/sprite.svg';

interface IconProps {
  name: string;
  width?: string; 
  height?: string; 
}

export const Icon: React.FC<IconProps> = ({ name, width, height }) => (
  <svg width={width} height={height}>
    <use href={`${sprite}#${name}`} />
  </svg>
);

