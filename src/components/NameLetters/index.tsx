import { FC } from 'react';

import useAnimation from '../../hooks/useAnimation';
import { NameLettersProps } from '../../interfaces';

import { Letter, Name } from './styled';

const NameLetters: FC<NameLettersProps> = ({ name }) => {
  const { activeIndex, animationComplete } = useAnimation(name);

  return (
    <Name>
      {name.split('').map((letter, index) => (
        <Letter
          key={index}
          isCustom={letter === 'R' || letter === 'K'}
          className={`nameLetter ${
            !animationComplete && (activeIndex === index ? 'active' : '')
          } ${
            !animationComplete &&
            (activeIndex === index - 1 || activeIndex === index + 1
              ? 'neighbor'
              : '')
          }`}
        >
          {letter}
        </Letter>
      ))}
    </Name>
  );
};

export default NameLetters;
