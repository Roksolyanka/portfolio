import React, { useState } from 'react';

import { SkillsType } from '../../types';
import { SkillItem } from '../../interfaces';

import { AccordionButton, AccordionWrapper, Content } from './styled';
import { Box } from '../../ui';
import theme from '../../theme';

interface AccordionProps {
  data: SkillsType;
  groupByCategory: (
    skills: SkillsType
  ) => Record<string, { title: string; skills: SkillItem[] }>;
}

const Accordion: React.FC<AccordionProps> = ({ data, groupByCategory }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const groupedData = groupByCategory(data);
  
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <AccordionWrapper width='100%' maxWidth='800px' margin='0 auto' opacity='0'>
      {Object.entries(groupedData).map(([key, { title, skills }], index) => (
        <Box
          key={key}
          border={
            activeIndex === index
              ? 'none'
              : `0 0 1px 0 solid ${theme.accentColor}`
          }
        >
          <AccordionButton
            onClick={() => toggleAccordion(index)}
            className={activeIndex === index ? 'active' : ''}
            fontFamily="'EB Garamond', serif"
            fontSize={['20px', '20px', '22px']}
            fontWeight='700'
            width='100%'
            justifyContent='space-between'
            alignItems='center'
            padding='15px 20px'
            border='none'
            background={theme.colors.backdropColor[3]}
          >
            <span>{title}</span>
            <span>&#9662;</span>
          </AccordionButton>
          <Content
            ref={(el) => {
              if (el && activeIndex === index) {
                el.style.maxHeight = `${el.scrollHeight}px`;
              } else if (el) {
                el.style.maxHeight = '0';
              }
            }}
            aria-hidden={activeIndex !== index}
          >
            {skills.map((item) => (
              <div key={item.displayName}>{item.displayName}</div>
            ))}
          </Content>
        </Box>
      ))}
    </AccordionWrapper>
  );
};

export default Accordion;
