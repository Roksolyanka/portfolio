import React from 'react';

import background from '../../assets/background.svg';
import projectsData from '../../data/projectsData';

import ProjectCard from '../../components/ProjectCard';

import { Background, StyledLink } from '../../ui';
import { Main, ProjectsSection } from './styled';
import { TitleH2 } from '../SkillsPage/styled';
import { ROUTE_ACHIEVEMENTS } from '../../constants';

const ProjectsPage = () => (
  <ProjectsSection aria-label='about section'>
    <Background
      alt='Hero'
      loading='lazy'
      width='1572'
      height='620'
      decoding='async'
      src={background}
    />
    <TitleH2>
      Here's a glimpse into some of the projects I've had the pleasure of
      working on:
    </TitleH2>
    <Main>
      {projectsData.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </Main>
    <StyledLink to={ROUTE_ACHIEVEMENTS}>My achievements &#10174;</StyledLink>
  </ProjectsSection>
);

export default ProjectsPage;
