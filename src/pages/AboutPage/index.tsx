import { Fragment } from 'react';

import personalData from '../../data/personal';
import { ROUTE_SKILLS } from '../../constants';
import background from '../../assets/background.svg';

import { PersonalPhoto, TextAccent } from './styled';
import {
  Background,
  FlexBox,
  GridColumns,
  Section,
  StyledLink,
  StyledParagraph,

} from '../../ui';

const AboutPage = () => (
  <Section aria-label='about section'>
    <Background
      alt='Hero'
      loading='lazy'
      width={1572}
      height={620}
      decoding='async'
      src={background}
    />
    <GridColumns
      gridTemplateColumns={['1fr', '1fr', '1fr', '1fr 1fr']}
      gap='16px'
      width='100%'
    >
      <PersonalPhoto
        alt={personalData.name}
        width={1000}
        height={1000}
        loading='lazy'
        decoding='async'
        src={personalData.photo.src}
        srcSet={personalData.photo.srcset}
      />
      <FlexBox
        flexDirection='column'
        justifyContent='center'
        width='100%'
        maxWidth={['100%', '100%', '100%', '600px', '700px']}
        order={[2, 2, 2, 1, 1]}
        margin={[0, 0, 0, 'auto']}
        padding={[0, 0, '0 0 16px 0', 0]}
        gap='16px'
      >
        <StyledParagraph
          margin='auto'
          fontSize={['16px', '18px', '20px', '22px', '24px']}
        >
          Greetings! <br /> My name is{' '}
          <TextAccent>{personalData.name}</TextAccent>, and I am a frontend
          developer passionate about creating responsive, user-oriented
          websites. My expertise lies in advanced frontend technologies like{' '}
          {personalData.skills.slice(0, 3).map((skill, index) => (
            <Fragment key={skill}>
              <TextAccent>{skill}</TextAccent>
              {index < 2 && ', '}
            </Fragment>
          ))}
          . Currently, I am actively working with{' '}
          {personalData.skills.slice(3).map((skill, index) => (
            <Fragment key={skill}>
              <TextAccent>{skill}</TextAccent>
              {index < personalData.skills.slice(3).length - 1 && ', '}
            </Fragment>
          ))}
          , always striving to push the boundaries of what's possible. I
          continuously improve my skills and stay updated on the latest trends
          to remain at the forefront of our dynamic industry.
        </StyledParagraph>
        <StyledLink to={ROUTE_SKILLS}>
          Coding Superpowers 💪 &#10174;
        </StyledLink>
      </FlexBox>
    </GridColumns>
  </Section>
);

export default AboutPage;
