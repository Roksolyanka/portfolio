import React, { useState } from 'react';

import { AccordionButton, AccordionWrapper } from './styled';
import { Box } from '../../ui';
import theme from '../../theme';
import { SkillItem } from '../../interfaces';
import AccordionContent from './AccordionContent';

interface AccordionProps {
  data: [string, { title: string; skills: SkillItem[] }][];
}

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <AccordionWrapper>
      {data.map(([key, { title, skills }], index) => (
        <Box
          key={key}
          border={
            activeIndex === index
              ? 'none'
              : `0 0 1px 0 solid ${theme.accentColor}`
          }
        >
          <AccordionButton
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            className={activeIndex === index ? 'active' : ''}
            fontSize={['20px', '20px', '22px']}
          >
            <span>{title}</span>
            <span>&#9662;</span>
          </AccordionButton>
          <AccordionContent isActive={activeIndex === index} skills={skills} />
        </Box>
      ))}
    </AccordionWrapper>
  );
};

export default Accordion;
