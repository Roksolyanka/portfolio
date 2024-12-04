import styled from 'styled-components';
import { anime } from '../../pages/SkillsPage/styled';
import { Box, FlexButton, GridColumns } from '../../ui';

export const AccordeonWrapper = styled(Box)`
  transform: scale(0.95);
  animation: ${anime} 0.5s ease-in-out forwards;
`;

export const AccordeonButton = styled(FlexButton)`
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
  grid-auto-rows: 30px;
  justify-items: center;
  transition: max-height 0.4s ease;
  border: 1px solid ${({ theme }) => theme.accentColor};
  backdrop-filter: blur(20px) saturate(100%);
  color: ${({ theme }) => theme.textColor};

  &.active {
    transition: max-height 0.4s ease;
  }
`;
