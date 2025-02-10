import styled from 'styled-components';
import { AbsoluteBox, Box, FlexBox, TextP } from '../../../ui';

export const HoveredBox = styled(Box)`
  z-index: 0;
  scroll-snap-align: center;
  transition: transform 0.8s ease, box-shadow 0.8s ease;

  &:hover {
    transform: scale(1.2);
    z-index: 1;
  }

  &:not(:hover) {
    transform: scale(1);
    transition: transform 0.8s ease;
  }
`;

export const HoveredFlexBox = styled(FlexBox)`
  pointer-events: none;

  &:hover {
    opacity: 0.6;
  }
`;

export const Blob = styled(AbsoluteBox)`
  filter: blur(40px);
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 1;
  }
`;

export const FakeBlob = styled(AbsoluteBox)`
  visibility: hidden;
`;

export const SkillName = styled(TextP)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.green[10]};

  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: 14px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: 16px;
  }
`;
