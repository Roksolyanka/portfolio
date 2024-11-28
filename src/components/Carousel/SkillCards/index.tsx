import React from 'react';

import { SkillsData } from '../../../types';
import { Icon } from '../../Icon';

import { Blob, FakeBlob, SkillName, StyledFlexBox, Wrapper } from './styled';

interface SkillCardsProps {
  data: SkillsData;
  isHidden?: boolean;
}

const SkillCards: React.FC<SkillCardsProps> = ({ data, isHidden = false }) => {
  return (
    <>
      {Object.keys(data).flatMap((category) =>
        data[category as keyof SkillsData].map((skill) => (
          <Wrapper
            key={`${category}-${skill.id}-${isHidden ? 'hidden' : 'visible'}`}
            className='WrapperIcon'
            position='relative'
            borderRadius='8px'
            padding='3px'
            minWidth='120px'
            overflow='hidden'
            zIndex='0'
          >
            <StyledFlexBox
              justifyContent='center'
              alignItems='center'
              flexDirection='column'
              gap='5px'
              height='100%'
              padding={['10px 0', '10px 0', '20px 0', '30px 0']}
              borderRadius='8px'
              zIndex='1'
            >
              <Icon
                name={skill.name}
                width='50px'
                height='50px'
                fill='currentColor'
              />
              <SkillName>{skill.displayName}</SkillName>
            </StyledFlexBox>
            <Blob
              data-blob
              position='absolute'
              zIndex='-1'
              height='80%'
              width='100px'
              top='100%'
              borderRadius='50%'
              opacity='0'
            />
            <FakeBlob
              data-fakeblob
              position='absolute'
              zIndex='-1'
              height='100%'
              borderRadius='50%'
            />
          </Wrapper>
        ))
      )}
    </>
  );
};

export default SkillCards;
