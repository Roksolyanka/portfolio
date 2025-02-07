import { FC, useEffect, useRef } from 'react';

import { AccordionContentProps } from '../../../interfaces';

import { Content } from './styled';

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
        <div key={displayName}>{displayName}</div>
      ))}
    </Content>
  );
};

export default AccordionContent;
