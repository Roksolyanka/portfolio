import { FC, useMemo } from 'react';

import SkillCards from './SkillCards';
import { CarouselProps } from '../../interfaces';

import { CarouselInner, Group } from './styled';

const Carousel: FC<CarouselProps> = ({ data }) => {
  const skills = useMemo(
    () =>
      data.map((skill, index) => ({
        id: `${skill.category}-${index + 1}`,
        iconName: skill.iconName,
        displayName: skill.displayName,
        title: skill.title,
        category: skill.category,
      })),
    [data]
  );

  const groupProps = {
    gap: '15px',
    margin: '0',
    padding: '0 15px 0 0',
  };

  return (
    <CarouselInner margin='0 auto' padding='20px 0' overflowX='auto'>
      <Group {...groupProps}>
        <SkillCards skills={skills} />
      </Group>
      <Group aria-hidden {...groupProps}>
        <SkillCards skills={skills} isHidden />
      </Group>
    </CarouselInner>
  );
};

export default Carousel;
