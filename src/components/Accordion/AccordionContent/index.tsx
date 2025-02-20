import { FC, useEffect, useRef } from 'react';

import { AccordionContentProps } from '../../../interfaces';

import { Content } from './styled';
import { Box } from '../../../ui';

const AccordionContent: FC<AccordionContentProps> = ({
  isActive,
  skills,
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isActive
        ? `${contentRef.current.scrollHeight}px`
        : '0';
    }
  }, [isActive]);

  return (
    <Content ref={contentRef} aria-hidden={!isActive}>
      {skills.map(({ displayName }) => (
        <Box key={displayName} padding='5px'>{displayName}</Box>
      ))}
    </Content>
  );
};

export default AccordionContent;
