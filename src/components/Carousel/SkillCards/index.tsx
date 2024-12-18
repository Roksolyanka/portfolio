import React from 'react';

import { Icon } from '../../Icon';

import { Blob, FakeBlob, SkillName, StyledFlexBox, Wrapper } from './styled';

interface SkillCardsProps {
  skills: {
    id: string;
    iconName: string;
    displayName: string;
  }[];
  isHidden?: boolean;
}

const SkillCards: React.FC<SkillCardsProps> = ({
  skills,
  isHidden = false,
}) => (
  <>
    {skills.map((skill) => (
      <Wrapper
        key={`${skill.id}-${isHidden ? 'hidden' : 'visible'}`}
        className='WrapperIcon'
      >
        <StyledFlexBox padding={['10px 0', '10px 0', '20px 0', '30px 0']}>
          <Icon
            name={skill.iconName}
            width='50px'
            height='50px'
            fill='currentColor'
          />
          <SkillName>{skill.displayName}</SkillName>
        </StyledFlexBox>
        <Blob data-blob />
        <FakeBlob data-fakeblob />
      </Wrapper>
    ))}
  </>
);

export default SkillCards;
