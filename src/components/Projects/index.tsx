import ProjectCard from '../ProjectCard';
import { ProjectsProps } from '../../interfaces';

import { Main } from './styled';

const Projects = ({ projects }: ProjectsProps) => (
  <Main>
    {projects.map((project, index) => (
      <ProjectCard key={index} project={project} index={index} />
    ))}
  </Main>
);

export default Projects;
