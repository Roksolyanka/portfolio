import styled, { keyframes } from 'styled-components';
import { FlexBox } from '../../ui';

const scrolling = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

export const CarouselInner = styled(FlexBox)`
  white-space: nowrap;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  > * {
    flex: 0 0 100%;
  }

  &:hover > div {
    animation-play-state: paused;
    cursor: pointer;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Group = styled(FlexBox)`
  will-change: transform;
  animation: ${scrolling} 40s linear infinite;
`;