import { useState } from 'react';

import personalData from '../../data/personal';
import background from '../../assets/background.svg';

import { Background, Section, StyledLink } from '../../ui';
import { Image, ImageLabel, ImagesContainer, Subtitle, Title } from './styled';
import { ROUTE_CONTACT } from '../../constants';

const AchievementsPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [imageAspectRatios, setImageAspectRatios] = useState<number[]>([]);

  const handleImageLoad = (
    index: number,
    event: React.SyntheticEvent<HTMLImageElement>
  ) => {
    const { naturalWidth, naturalHeight } = event.target as HTMLImageElement;
    const aspectRatio = naturalWidth / naturalHeight;
    setImageAspectRatios((prevRatios) => {
      const updatedRatios = [...prevRatios];
      updatedRatios[index] = aspectRatio;
      return updatedRatios;
    });
  };
  return (
    <Section
      aria-label='achievements section'
      flexDirection='column'
      gap='10px'
    >
      <Background
        alt='Hero'
        loading='lazy'
        width='1572'
        height='620'
        decoding='async'
        src={background}
      />
      <input
        type='checkbox'
        id='click'
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        style={{ display: 'none' }}
      />
      <Title isChecked={isChecked} padding='20px 0 0 0'>
        Some of my achievements are listed below
      </Title>
      <ImagesContainer
        isChecked={isChecked}
        alignItems='center'
        justifyContent='center'
        width='100%'
        gap='10px'
        flexWrap='wrap'
        position='relative'
      >
        {personalData.achievements.map(({ src, srcset }, index) => (
          <ImageLabel
            key={index}
            htmlFor='click'
            position={index}
            isChecked={isChecked}
            aspectRatio={imageAspectRatios[index]}
          >
            <Image
              src={src}
              srcSet={srcset}
              alt={`Achievement ${index + 1}`}
              onLoad={(event) => handleImageLoad(index, event)}
            />
          </ImageLabel>
        ))}
      </ImagesContainer>
      <Subtitle isChecked={isChecked} padding='0 0 20px 0'>
        More will be added soon ...
      </Subtitle>
      <StyledLink to={ROUTE_CONTACT}>My contacts &#10174;</StyledLink>
    </Section>
  );
};

export default AchievementsPage;
