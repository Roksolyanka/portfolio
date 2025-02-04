import { FC } from 'react';

import { Icon } from '../Icon';
import { ProjectCardProps } from '../../interfaces';

import theme from '../../theme';
import {
  Badge,
  Blackout,
  Card,
  Description,
  Details,
  IconContainer,
  Input,
  Link,
  Numeration,
  ProjectName,
  Skills,
} from './styled';

const ProjectCard: FC<ProjectCardProps> = ({ project, index }) => (
  <>
    <Input
      type='radio'
      name='slide'
      id={`c-${index}`}
      defaultChecked={index === 0}
    />
    <Card htmlFor={`c-${index}`} $background={project.projectImage.src}>
      <Blackout
        flexDirection='column'
        justifyContent='space-between'
        width='100%'
        height='100%'
      >
        {(project.website || project.github) && (
          <IconContainer
            justifyContent='space-between'
            width='100%'
            padding='16px'
          >
            {project.github && (
              <Link
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Icon
                  name='icon-github'
                  width='24px'
                  height='24px'
                  fill={theme.colors.green[10]}
                />
              </Link>
            )}
            {project.website && (
              <Link
                href={project.website}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Icon
                  name='icon-share'
                  width='24px'
                  height='24px'
                  fill={theme.colors.green[10]}
                />
              </Link>
            )}
          </IconContainer>
        )}
        {project.isTeamProject && (
          <Badge
            fontSize='16px'
            fontWeight='600'
            fontFamily='EB Garamond, serif'
            right='0'
            top='30%'
            background={theme.colors.orange[5]}
            color={theme.colors.green[10]}
            padding='8px'
            borderRadius='5px'
          >
            Team Project
          </Badge>
        )}
        <Numeration>{index + 1}</Numeration>
        <Details
          flexDirection='column'
          justifyContent='flex-end'
          width='100%'
          padding='16px'
          gap='10px'
        >
          <ProjectName>{project.projectName}</ProjectName>
          <Description>{project.description}</Description>
          <Skills>{project.skills}</Skills>
        </Details>
      </Blackout>
    </Card>
  </>
);

export default ProjectCard;
