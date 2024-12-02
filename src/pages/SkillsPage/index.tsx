import React, { useState } from 'react';

import skillsData from '../../data/skillsData';
import { SkillsData } from '../../types/index';
import Toggler from '../../components/Toggler';
import Carousel from '../../components/Carousel';
import { ROUTE_PROJECTS } from '../../constants';
import background from '../../assets/background.svg';

import { Box, List, ListItem } from '../../ui';
import { Background, StyledLink } from '../HomePage/styled';
import { SkillsSection, TitleH2 } from './styled';

const SkillsPage = () => {
  const [isCarousel, setIsCarousel] = useState(true);

  return (
    <SkillsSection aria-label='skills section'>
      <Background
        alt='Hero'
        loading='lazy'
        width='1572'
        height='620'
        decoding='async'
        src={background}
      />
      <Box padding={[0, 0, '24px 0']}>
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
        <Carousel data={skillsData as SkillsData} />
      ) : (
        <List>
          {Object.keys(skillsData).map((category) => (
            <div key={category}>
              {(skillsData as SkillsData)[category as keyof SkillsData].map(
                (skill) => (
                  <ListItem key={skill.id}>
                    {skill.displayName}
                  </ListItem>
                )
              )}
            </div>
          ))}
        </List>
      )}

      <StyledLink to={ROUTE_PROJECTS}>My projects &#10174;</StyledLink>
    </SkillsSection>
  );
};

export default SkillsPage;
