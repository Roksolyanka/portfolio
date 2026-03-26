import { useState } from 'react';
import ProjectCard from '../ProjectCard';
import { ProjectsProps } from '../../types';

import { Main } from './styled';

const Projects = ({ projects }: ProjectsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Main>
      {projects.map((project, index) => (
        <ProjectCard
          key={`${project.projectName}-${project.github || project.website || project.projectImage.src}`}
          project={project}
          index={index}
          isActive={index === activeIndex}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </Main>
  );
};

export default Projects;
