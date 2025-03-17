import { useEffect, useState } from 'react';

import skillsData from '../../data/skills';
import { SkillsType } from '../../types';
import { SkillCategory } from '../../interfaces';
import Toggler from '../../components/Toggler';
import Carousel from '../../components/Carousel';
import Accordion from '../../components/Accordion';
import { ROUTE_PROJECTS } from '../../constants';
import background from '../../assets/background.svg';

import { Background, Box, StyledLink, TitleH2 } from '../../ui';
import { SkillsSection} from './styled';

const SkillsPage = () => {
  const [isCarousel, setIsCarousel] = useState<boolean | null>(null);

   useEffect(() => {
     const savedState = localStorage.getItem('isCarousel');
     if (savedState !== null) {
       setIsCarousel(JSON.parse(savedState));
     } else {
       setIsCarousel(true);
     }
   }, []);

  useEffect(() => {
    if (isCarousel !== null) {
      localStorage.setItem('isCarousel', JSON.stringify(isCarousel));
    }
  }, [isCarousel]); 

  const groupSkillsByCategory = (
    skills: SkillsType
  ): [string, SkillCategory][] => {
    const result = skills.reduce<Record<string, SkillCategory>>(
      (acc, skill) => {
        if (!acc[skill.category]) {
          acc[skill.category] = { title: skill.title, skills: [] };
        }
        acc[skill.category].skills.push(skill);
        return acc;
      },
      {}
    );

    return Object.entries(result);
  };

  return (
    <SkillsSection
      aria-label='skills section'
      isAccordeon={!isCarousel}
      gap='20px'
      padding='0 15px'
      flexWrap='wrap'
      alignItems='baseline'
    >
      <Background
        alt='Hero'
        loading='lazy'
        width={1572}
        height={620}
        decoding='async'
        src={background}
      />
      <Box padding={[0, 0, '24px 0']} width='100%'>
        <TitleH2>
          I turn these skills into beautiful web projects
          <Toggler
            togglePosition={isCarousel ?? false}
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

      <StyledLink to={ROUTE_PROJECTS}>Code in Motion 🎬 &#10174;</StyledLink>
    </SkillsSection>
  );
};

export default SkillsPage;
