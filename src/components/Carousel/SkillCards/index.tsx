import { FC, MouseEvent } from 'react';

import { Icon } from '../../Icon';
import { SkillCardsProps } from '../../../interfaces';

import {
  Blob,
  FakeBlob,
  HoveredBox,
  HoveredFlexBox,
  SkillName,
} from './styled';
import theme from '../../../theme';

const SkillCards: FC<SkillCardsProps> = ({ skills, isHidden = false }) => {
  const handleMouseMove = (ev: MouseEvent<HTMLDivElement>) => {
    const card = ev.currentTarget;
    const blob = card.querySelector('[data-blob]') as HTMLElement;
    const fakeBlob = card.querySelector('[data-fakeblob]') as HTMLElement;

    if (blob && fakeBlob) {
      const rec = fakeBlob.getBoundingClientRect();
      const x = ev.clientX - rec.left - rec.width / 2;
      const y = ev.clientY - rec.top - rec.height / 2;
      blob.style.transform = `translate(${x}px, ${y}px)`;
    }
  };

  return (
    <>
      {skills.map((skill) => (
        <HoveredBox
          key={`${skill.id}-${isHidden ? 'hidden' : 'visible'}`}
          onMouseMove={handleMouseMove}
          className='WrapperIcon'
          position='relative'
          minWidth='120px'
          borderRadius='8px'
          padding='3px'
          overflow='hidden'
          background={theme.colors.white[0]}
          boxShadow={theme.colors.boxShadow[2]}
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
            <Icon
              name={skill.iconName}
              width='50px'
              height='50px'
              fill='currentColor'
            />
            <SkillName>
              {skill.displayName}
            </SkillName>
          </HoveredFlexBox>
          <Blob
            data-blob
            width='100px'
            height='80%'
            top='100%'
            left='calc(20% - 50px)'
            borderRadius='50%'
            zIndex='-1'
            opacity='0'
            background={theme.colors.green[4]}
          />
          <FakeBlob
            data-fakeblob
            height='100%'
            borderRadius='50%'
            zIndex='-1'
          />
        </HoveredBox>
      ))}
    </>
  );
};

export default SkillCards;
