import { FC } from 'react';

import AccordionContent from './AccordionContent';
import { AccordionProps } from '../../types';
import { useTheme } from '../../hooks/useTheme';

import { AccordionFlexButton, AnimatedBox } from './styled';
import { Box } from '../../ui';
import { useActiveKey } from '../../hooks/useActiveKey';

const Accordion: FC<AccordionProps> = ({ data }) => {
  const [activeKey, toggleKey] = useActiveKey<string>();
  const theme = useTheme();

  return (
    <AnimatedBox width='100%' maxWidth='800px' margin='0 auto' opacity='0'>
      {data.map(([key, { title, skills }]) => {
        const isActive = activeKey === key;

        return (
          <Box
            key={key}
            borderBottom={
              isActive ? undefined : `1px solid ${theme.accentColor}`
            }
          >
            <AccordionFlexButton
              onClick={() => toggleKey(key)}
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
