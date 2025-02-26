import { useState } from 'react';

import personalData from '../../data/personal';
import NameLetters from '../../components/NameLetters';
import SocialLinks from '../../components/SocialLinks';
import Code from '../../components/Code';
import Toggler from '../../components/Toggler';
import { ROUTE_ABOUT } from '../../constants';
import background from '../../assets/background.svg';

import { TextSpecialty, TitleH1 } from './styled';
import {
  Background,
  FlexBox,
  GridColumns,
  Section,
  StyledLink,
} from '../../ui';

const HomePage = () => {
  const [togglePosition, setTogglePosition] = useState<boolean>(true);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = togglePosition ? personalData.cv : personalData.coverLetter;
    link.download = togglePosition
      ? personalData.cvName
      : personalData.coverLetterName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Section aria-label='hero section'>
      <Background
        alt='Hero'
        loading='lazy'
        width='1572'
        height='620'
        decoding='async'
        src={background}
      />
      <GridColumns
        gridTemplateColumns={['1fr', '1fr', '1fr', '1fr 1fr']}
        gap='16px'
        width='100%'
      >
        <FlexBox
          flexDirection='column'
          justifyContent='center'
          width='100%'
          maxWidth={['100%', '100%', '100%', '600px', '700px']}
          order={[2, 2, 2, 1, 1]}
          margin={[0, 0, 0, 'auto']}
          padding={[0, 0, '0 0 16px 0', 0]}
        >
          <TitleH1>
            Hello, this is <br />
            <NameLetters name={personalData.name} /> <br />
            I'm a <TextSpecialty>{personalData.designation}</TextSpecialty>
          </TitleH1>
          <SocialLinks />
          <Toggler
            togglePosition={togglePosition}
            setTogglePosition={setTogglePosition}
            handleDownload={handleDownload}
            cvHref={personalData.cv}
            coverLetterHref={personalData.coverLetter}
            labelFirst='CV'
            labelSecond='COVER LETTER'
            iconName='icon-download'
          />
          <StyledLink to={ROUTE_ABOUT}>About me &#10174;</StyledLink>
        </FlexBox>
        <Code />
      </GridColumns>
    </Section>
  );
};

export default HomePage;
