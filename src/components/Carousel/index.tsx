import React, { useEffect, useMemo } from 'react';

import SkillCards from './SkillCards';
import { SkillsType } from '../../types';
import { getElement } from '../../helpers';

import { CarouselInner, Group } from './styled';

interface CarouselProps {
  data: SkillsType;
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const skills = useMemo(
    () =>
      data.map((skill, index) => ({
        id: `${skill.category}-${index + 1}`,
        iconName: skill.iconName,
        displayName: skill.displayName,
      })),
    [data]
  );

  useEffect(() => {
    const cards = document.querySelectorAll('.WrapperIcon');

    const handleMouseMove = (ev: MouseEvent) => {
      cards.forEach((card) => {
        const blob = getElement<HTMLElement>(card, '[data-blob]');
        const fakeBlob = getElement<HTMLElement>(card, '[data-fakeblob]');

        if (blob && fakeBlob) {
          const rec = fakeBlob.getBoundingClientRect();
          const x = ev.clientX - rec.left - rec.width / 2;
          const y = ev.clientY - rec.top - rec.height / 2;
          blob.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <CarouselInner margin='0 auto' padding='20px 0' overflowX='auto'>
      <Group gap='15px' margin='0' padding='0 15px 0 0'>
        <SkillCards skills={skills} />
      </Group>
      <Group aria-hidden gap='15px' margin='0' padding='0 15px 0 0'>
        <SkillCards skills={skills} isHidden />
      </Group>
    </CarouselInner>
  );
};

export default Carousel;
