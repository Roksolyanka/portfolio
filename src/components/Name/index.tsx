import React, { FC } from 'react';
import { Name } from './styled';

interface NameLettersProps {
  name: string;
}

export const NameLetters: FC<NameLettersProps> = ({ name }) => (
  <Name>
    {name.split('').map((letter, index) => (
      <span key={index} className='nameLetter'>
        {letter}
      </span>
    ))}
  </Name>
);
