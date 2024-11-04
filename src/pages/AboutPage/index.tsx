import React from 'react';

import avatar from '../../assets/images/avatar.jpg';
import avatar2x from '../../assets/images/avatar-2x.jpg';
import background from '../../assets/background.svg';

import { AboutSection, PersonalPhoto, TextAccent, TextP } from './styled';
import { Background, StyledLink } from '../HomePage/styled';
import { FlexBox, GridColumns } from '../../ui';
import { ROUTE_SKILLS } from '../../constants';

const AboutPage = () => {
  return (
    <AboutSection>
      <Background
        alt='Hero'
        loading='lazy'
        width='1572'
        height='620'
        decoding='async'
        src={background}
      ></Background>
      <GridColumns
        gridTemplateColumns={['1fr', '1fr', '1fr', '1fr 1fr']}
        gap='16px'
        width='100%'
      >
        <PersonalPhoto
          alt='Roksolana Kushnir'
          width={1000}
          height={1000}
          loading='lazy'
          decoding='async'
          src={avatar}
          srcSet={`${avatar} 1x, ${avatar2x} 2x`}
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
          <TextP>
            Greetings! <br /> My name is{' '}
            <TextAccent>Roksolana Kushnir</TextAccent>, and I am a frontend
            developer passionate about creating responsive, user-oriented
            websites. My expertise lies in advanced frontend technologies like{' '}
            <TextAccent>HTML</TextAccent>, <TextAccent>CSS</TextAccent>, and{' '}
            <TextAccent>JavaScript</TextAccent>. Currently, I am actively
            working with <TextAccent>React</TextAccent>,{' '}
            <TextAccent>Redux</TextAccent>,{' '}
            <TextAccent>React Native</TextAccent>, and{' '}
            <TextAccent>TypeScript</TextAccent>, always striving to push the
            boundaries of what's possible. I continuously improve my skills and
            stay updated on the latest trends to remain at the forefront of our
            dynamic industry.
          </TextP>
          <StyledLink to={ROUTE_SKILLS}>My skills &#10174;</StyledLink>
        </FlexBox>
      </GridColumns>
    </AboutSection>
  );
};

export default AboutPage;
