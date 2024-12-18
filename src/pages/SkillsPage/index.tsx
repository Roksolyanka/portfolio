import React, { useEffect, useState } from 'react';

import skillsData from '../../data/skillsData';
import { SkillsType } from '../../types';
import { SkillItem } from '../../interfaces';
import Toggler from '../../components/Toggler';
import Carousel from '../../components/Carousel';
import Accordion from '../../components/Accordion';
import { ROUTE_PROJECTS } from '../../constants';
import background from '../../assets/background.svg';

import { Box } from '../../ui';
import { Background, StyledLink } from '../HomePage/styled';
import { SkillsSection, TitleH2 } from './styled';

const SkillsPage = () => {
  const [isCarousel, setIsCarousel] = useState<boolean>(() => {
    const savedState = localStorage.getItem('isCarousel');
    return savedState ? JSON.parse(savedState) : true;
  });

  useEffect(() => {
    localStorage.setItem('isCarousel', JSON.stringify(isCarousel));
  }, [isCarousel]);

  const groupSkillsByCategory = (skills: SkillsType) => {
    const result = skills.reduce<
      Record<
        string,
        {
          title: string;
          skills: SkillItem[];
        }
      >
    >((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = { title: skill.title, skills: [] };
      }
      acc[skill.category].skills.push(skill);
      return acc;
    }, {});

    return Object.entries(result);
  };

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
        <Accordion data={groupSkillsByCategory(skillsData as SkillsType)} />
      )}

      <StyledLink to={ROUTE_PROJECTS}>My projects &#10174;</StyledLink>
    </SkillsSection>
  );
};

export default SkillsPage;
