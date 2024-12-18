import React, { useEffect, useRef } from 'react';
import { SkillItem } from '../../../interfaces';
import { Content } from './styled';

interface AccordionContentProps {
  isActive: boolean;
  skills: SkillItem[];
}

const AccordionContent: React.FC<AccordionContentProps> = ({
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
      {skills.map((item: SkillItem) => (
        <div key={item.displayName}>{item.displayName}</div>
      ))}
    </Content>
  );
};

export default AccordionContent;
