import styled from 'styled-components';
import { anime } from '../../pages/SkillsPage/styled';
import { Box, FlexButton } from '../../ui';

export const AccordionWrapper = styled(Box)`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0;
  transform: scale(0.95);
  animation: ${anime} 0.5s ease-in-out forwards;
`;

export const AccordionButton = styled(FlexButton)`
  font-family: 'EB Garamond', serif;
  font-weight: 700;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border: none;
  cursor: pointer;
  transition: all 0.8s ease;
  color: ${({ theme }) => theme.textColor};
  background: ${({ theme }) => theme.colors.backdropColor[3]};

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
