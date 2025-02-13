import styled, { keyframes } from 'styled-components';
import { Section } from '../../ui';

export const anime = keyframes`
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const SkillsSection = styled(Section).withConfig({
  shouldForwardProp: (prop) => prop !== 'isAccordeon',
})<{ isAccordeon?: boolean }>`
  flex-direction: ${({ isAccordeon }) => (isAccordeon ? 'column' : 'row')};
  align-content: ${({ isAccordeon }) => (isAccordeon ? 'center' : 'normal')};
`;
