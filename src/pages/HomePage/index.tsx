import { useState } from 'react';

import NameLetters from '../../components/NameLetters';
import SocialLinks from '../../components/SocialLinks';
import Code from '../../components/Code';
import Toggler from '../../components/Toggler';
import { ROUTE_ABOUT } from '../../constants';
import useGetData from '../../hooks/useGetData';
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
  const { data: personalData } = useGetData('personal');
  const { name, designation, cv, coverLetter, cvName, coverLetterName } =
    personalData;
  const [togglePosition, setTogglePosition] = useState<boolean>(true);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = togglePosition ? cv : coverLetter;
    link.download = togglePosition ? cvName : coverLetterName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Section aria-label='hero section'>
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
            <NameLetters name={name} /> <br />
            I'm a <TextSpecialty>{designation}</TextSpecialty>
          </TitleH1>
          <SocialLinks />
          <Toggler
            togglePosition={togglePosition}
            setTogglePosition={setTogglePosition}
            handleDownload={handleDownload}
            cvHref={cv}
            coverLetterHref={coverLetter}
            labelFirst='CV'
            labelSecond='COVER LETTER'
            iconName='icon-download'
          />
          <StyledLink to={ROUTE_ABOUT}>
            The Face Behind the Code 👩‍💻 &#10174;
          </StyledLink>
        </FlexBox>
        <Code />
      </GridColumns>
    </Section>
  );
};

export default HomePage;
