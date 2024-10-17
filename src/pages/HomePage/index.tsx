import React from 'react';

import { ROUTES } from '../../constants';
import { NameLetters } from '../../components/Name';
import { Icon } from '../../components/Icon';

import avatar from '../../assets/images/avatar.jpg';
import avatar2x from '../../assets/images/avatar-2x.jpg';
import cv from '../../assets/files/cv.pdf';
import coverLetter from '../../assets/files/cover_letter.pdf';

import theme from '../../theme';
import {
  ButtonLink,
  ButtonWrapper,
  HomeSection,
  NameWrapper,
  PersonalPhoto,
  StyledLink,
  StyledText,
} from './styled';

const HomePage = () => {
  return (
    <HomeSection className='sectionHome'>
      <div>
        <StyledText>Hello, I'm</StyledText>
        <NameWrapper>
          <NameLetters name='Roksolana' />
          <NameLetters name='Kushnir' />
        </NameWrapper>
        <StyledText>Frontend developer</StyledText>
      </div>
      <PersonalPhoto
        alt='Roksolana Kushnir'
        width={1000}
        height={1000}
        loading='lazy'
        decoding='async'
        src={avatar}
        srcSet={`${avatar} 1x, ${avatar2x} 2x`}
      />
      <ButtonWrapper>
        <ButtonLink
          href={cv}
          download='Roksolana_Kushnir_CV.pdf'
          className='buttonDownload'
        >
          CV
          <Icon name='icon-file-pdf' fill={theme.colors.blue[0]} />
        </ButtonLink>
        <ButtonLink
          href={coverLetter}
          download='Roksolana_Kushnir_Cover_Letter.pdf'
          className='buttonDownload'
        >
          Cover Letter
          <Icon name='icon-file-pdf' fill={theme.colors.blue[0]} />
        </ButtonLink>
      </ButtonWrapper>
      <StyledLink to={ROUTES.ABOUT} className='navigation-link'>
        About me &#10174;
      </StyledLink>
    </HomeSection>
  );
};

export default HomePage;
