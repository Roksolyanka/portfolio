import React, { useState } from 'react';

import skillsData from '../../data/skillsData';
import { SkillsType } from '../../types';
import Toggler from '../../components/Toggler';
import Carousel from '../../components/Carousel';
import { ROUTE_PROJECTS } from '../../constants';
import background from '../../assets/background.svg';

import { Box } from '../../ui';
import { Background, StyledLink } from '../HomePage/styled';
import { SkillsSection, TitleH2 } from './styled';
import Accordeon from '../../components/Accordeon';

const SkillsPage = () => {
  const [isCarousel, setIsCarousel] = useState(true);

  return (
    <SkillsSection aria-label='skills section' isAccordeon={!isCarousel}>
      <Background
        alt='Hero'
        loading='lazy'
        width='1572'
        height='620'
        decoding='async'
        src={background}
      />
      <Box padding={[0, 0, '24px 0']} width='100%'>
        <TitleH2>
          I turn these skills into beautiful web projects
          <Toggler
            togglePosition={isCarousel}
            setTogglePosition={setIsCarousel}
            labelFirst='Show scroll animation'
            labelSecond='Show categories'
            iconName='icon-embed'
          />
        </TitleH2>
      </Box>

      {isCarousel ? (
        <Carousel data={skillsData as SkillsType} />
      ) : (
        <Accordeon data={skillsData as SkillsType} />
      )}

      <StyledLink to={ROUTE_PROJECTS}>My projects &#10174;</StyledLink>
    </SkillsSection>
  );
};

export default SkillsPage;
