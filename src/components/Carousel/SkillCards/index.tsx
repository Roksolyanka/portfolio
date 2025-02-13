import { FC, MouseEvent } from 'react';

import { Icon } from '../../Icon';
import { SkillsType } from '../../../types';

import {
  Blob,
  FakeBlob,
  HoveredBox,
  HoveredFlexBox,
  SkillName,
} from './styled';
import theme from '../../../theme';

type SkillCardsProps = {
  skills: SkillsType;
  isHidden?: boolean;
};

const SkillCards: FC<SkillCardsProps> = ({ skills, isHidden = false }) => {
  const { white } = theme.colors;
  const { boxShadow } = theme;

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    const blob = card.querySelector('[data-blob]') as HTMLElement;
    const fakeBlob = card.querySelector('[data-fakeblob]') as HTMLElement;

    if (blob && fakeBlob) {
      const rec = fakeBlob.getBoundingClientRect();
      const x = event.clientX - rec.left - rec.width / 2;
      const y = event.clientY - rec.top - rec.height / 2;
      blob.style.transform = `translate(${x}px, ${y}px)`;
    }
  };

  return skills.map(({ id, iconName, displayName }) => (
    <HoveredBox
      key={`${id}-${isHidden ? 'hidden' : 'visible'}`}
      onMouseMove={handleMouseMove}
      className='WrapperIcon'
      position='relative'
      minWidth='120px'
      borderRadius='8px'
      padding='3px'
      overflow='hidden'
      background={white[0]}
      boxShadow={boxShadow[2]}
    >
      <HoveredFlexBox
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        height='100%'
        padding={['10px 0', '10px 0', '20px 0', '30px 0']}
        gap='5px'
        borderRadius='8px'
        zIndex='1'
      >
        <Icon name={iconName} width='50px' height='50px' fill='currentColor' />
        <SkillName>{displayName}</SkillName>
      </HoveredFlexBox>
      <Blob data-blob />
      <FakeBlob data-fakeblob />
    </HoveredBox>
  ));
};

export default SkillCards;
