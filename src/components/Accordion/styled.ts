import styled from 'styled-components';
import { anime } from '../../pages/SkillsPage/styled';
import { Box, FlexButton } from '../../ui';

export const AnimatedBox = styled(Box)`
  transform: scale(0.95);
  animation: ${anime} 0.5s ease-in-out forwards;
`;

export const AccordionFlexButton = styled(FlexButton)`
  font-family: 'EB Garamond', serif;
  cursor: pointer;
  transition: all 0.8s ease;

  &:hover {
    background: ${({ theme }) => theme.accentColor};
    color: ${({ theme }) => theme.hoverColorReverse};
    transition: background 0.8s ease, color 0.8s ease;
  }

  &:not(:hover) {
    transition: background 0.8s ease, color 0.8s ease;
  }

  &.active {
    background: ${({ theme }) => theme.accentColor};
    color: ${({ theme }) => theme.hoverColorReverse};
  }

  & span:last-child {
    display: inline-block;
    transition: transform 0.4s;
  }

  &.active span:last-child {
    transform: rotate(180deg);
  }
`;
