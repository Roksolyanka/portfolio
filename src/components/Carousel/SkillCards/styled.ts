import styled from 'styled-components';
import { Box, FlexBox } from '../../../ui';

export const Wrapper = styled(Box)`
  background: ${({ theme }) => theme.colors.white[0]};
  scroll-snap-align: center;
  box-shadow: 0 3px 6px rgba(51, 121, 18, 0.05),
    0 8px 15px rgba(51, 121, 18, 0.1), 0 0 0 1px hsla(0, 0%, 100%, 0.1);
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

export const StyledFlexBox = styled(FlexBox)`
  pointer-events: none;

  &:hover {
    opacity: 0.6;
  }
`;

export const Blob = styled(Box)`
  left: calc(20% - 50px);
  background: ${({ theme }) => theme.colors.green[4]};
  filter: blur(40px);
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 1;
  }
`;

export const FakeBlob = styled(Box)`
  visibility: hidden;
`;

export const SkillName = styled.p`
  font-family: 'EB Garamond', serif;
  font-weight: 500;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.green[10]};

  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: 14px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: 16px;
  }
`;