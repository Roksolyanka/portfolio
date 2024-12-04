import React, { useState } from 'react';

import { SkillsType } from '../../types';

import { AccordeonButton, AccordeonWrapper, Content } from './styled';
import { Box } from '../../ui';
import theme from '../../theme';

interface AccordeonProps {
  data: SkillsType;
}

const Accordeon: React.FC<AccordeonProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordeon = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <AccordeonWrapper width='100%' maxWidth='800px' margin='0 auto' opacity='0'>
      {Object.entries(data).map(([key, { title, skills }], index) => (
        <Box
          key={key}
          border={
            activeIndex === index
              ? 'none'
              : `0 0 1px 0 solid ${theme.accentColor}`
          }
        >
          <AccordeonButton
            onClick={() => toggleAccordeon(index)}
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
          </AccordeonButton>
          <Content
            ref={(el) => {
              if (el && activeIndex === index) {
                el.style.maxHeight = `${el.scrollHeight}px`;
              } else if (el) {
                el.style.maxHeight = '0';
              }
            }}
            aria-hidden={activeIndex !== index}
            gridTemplateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr 1fr']}
            alignItems='center'
            fontFamily="'EB Garamond', serif"
            fontSize={['14px', '14px', '16px', '18px']}
            fontWeight='600'
            maxHeight='0'
            overflow='hidden'
            padding={[0, 0, '0 10px']}
            background={theme.colors.backdropColor[3]}
          >
            {skills.map((item, i) => (
              <div key={i}>{item.displayName}</div>
            ))}
          </Content>
        </Box>
      ))}
    </AccordeonWrapper>
  );
};

export default Accordeon;
