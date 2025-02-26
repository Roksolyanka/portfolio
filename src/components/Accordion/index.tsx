import { FC, useState } from 'react';

import AccordionContent from './AccordionContent';
import { AccordionProps } from '../../interfaces';
import { useTheme } from '../../hooks/useTheme';

import { AccordionFlexButton, AnimatedBox } from './styled';
import { Box } from '../../ui';

const Accordion: FC<AccordionProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const theme = useTheme();
  return (
    <AnimatedBox width='100%' maxWidth='800px' margin='0 auto' opacity='0'>
      {data.map(([key, { title, skills }], index) => {
        const isActive = activeIndex === index;
        return (
          <Box
            key={key}
            border={isActive ? 'none' : `0 0 1px 0 solid ${theme.accentColor}`}
          >
            <AccordionFlexButton
              onClick={() => setActiveIndex(isActive ? null : index)}
              className={isActive ? 'active' : ''}
              fontSize={['20px', '20px', '22px']}
              width='100%'
              justifyContent='space-between'
              alignItems='center'
              padding='15px 20px'
              border='none'
              fontWeight='700'
              color={theme.textColor}
              background={theme.backdropColor[3]}
            >
              <span>{title}</span>
              <span>&#9662;</span>
            </AccordionFlexButton>
            <AccordionContent isActive={isActive} skills={skills} />
          </Box>
        );
      })}
    </AnimatedBox>
  );
};

export default Accordion;
