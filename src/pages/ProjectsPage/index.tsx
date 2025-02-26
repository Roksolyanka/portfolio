import background from '../../assets/background.svg';
import projectsData from '../../data/projects';
import { ROUTE_ACHIEVEMENTS } from '../../constants';
import Projects from '../../components/Projects';

import { Background, Section, StyledLink, TitleH2 } from '../../ui';

const ProjectsPage = () => (
  <Section
    aria-label='projects section'
    gap='10px'
    padding={['0', '0', '0 25px', '0 100px']}
    flexWrap='wrap'
    alignItems='baseline'
    justifyContent='center'
  >
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
    <Projects projects={projectsData} />
    <StyledLink to={ROUTE_ACHIEVEMENTS}>My achievements &#10174;</StyledLink>
  </Section>
);

export default ProjectsPage;
