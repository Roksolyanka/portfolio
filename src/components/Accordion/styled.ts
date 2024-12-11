import styled from 'styled-components';
import { anime } from '../../pages/SkillsPage/styled';
import { Box, FlexButton, GridColumns } from '../../ui';

export const AccordionWrapper = styled(Box)`
  transform: scale(0.95);
  animation: ${anime} 0.5s ease-in-out forwards;
`;

export const AccordionButton = styled(FlexButton)`
  cursor: pointer;
  transition: all 0.8s ease;
  color: ${({ theme }) => theme.textColor};

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

export const Content = styled(GridColumns)`
  font-size: 14px;
  font-weight: 600;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 30px;
  justify-items: center;
  transition: max-height 0.4s ease;
  max-height: 0;
  overflow: hidden;
  padding: 0;
  backdrop-filter: blur(20px) saturate(100%);
  border: 1px solid ${({ theme }) => theme.accentColor};
  background: ${({ theme }) => theme.colors.backdropColor[3]};
  color: ${({ theme }) => theme.textColor};

  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: 16px;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 10px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: 18px;
  }
`;
