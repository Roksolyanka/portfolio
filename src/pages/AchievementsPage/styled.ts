import styled from 'styled-components';
import { fadeIn, FlexBox, TextP, TitleH2 } from '../../ui';

export const Title = styled(TitleH2).withConfig({
  shouldForwardProp: (prop) => prop !== 'isChecked',
})<{ isChecked?: boolean }>`
  opacity: ${({ isChecked }) => (isChecked ? 1 : 0)};
  transition: opacity 0.6s;
`;

export const Subtitle = styled(TextP).withConfig({
  shouldForwardProp: (prop) => prop !== 'isChecked',
})<{ isChecked?: boolean }>`
  color: ${({ theme }) => theme.colors.orange[6]};
  opacity: ${({ isChecked }) => (isChecked ? 1 : 0)};
  transition: 0.6s;
`;

export const ImagesContainer = styled(FlexBox).withConfig({
  shouldForwardProp: (prop) => prop !== 'isChecked',
})<{ isChecked?: boolean }>`
  min-height: ${({ isChecked }) => (isChecked ? 'auto' : '400px')};
  transition: 0.6s;
  animation: ${fadeIn} 1s ease-out forwards;
`;

export const ImageLabel = styled('label').withConfig({
  shouldForwardProp: (prop) =>
    prop !== 'isChecked' && prop !== 'position' && prop !== 'aspectRatio',
})<{ isChecked?: boolean; position?: number; aspectRatio?: number }>`
  cursor: pointer;
  width: ${({ aspectRatio }) =>
    aspectRatio && aspectRatio > 1 ? '240px' : '180px'};
  height: ${({ aspectRatio }) =>
    aspectRatio && aspectRatio > 1 ? '180px' : '240px'};
  border-radius: 10px;
  overflow: hidden;
  background: ${({ theme }) => theme.accentColor};
  border: 5px solid ${({ theme }) => theme.accentColor};
  box-shadow: 0 0 5px ${({ theme }) => theme.accentColor},
    0 0 10px ${({ theme }) => theme.accentColor};
  position: ${({ isChecked }) => (isChecked ? 'relative' : 'absolute')};
  transition: all 0.8s ease;

  ${({ isChecked, position = 0 }) =>
    !isChecked
      ? `
      transform: rotate(${position * 10 + 5}deg) ;  
    `
      : `
      transform: none; 
    `}

  &:hover img {
    filter: grayscale(0);
    transform: scale(1.08);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: ${({ aspectRatio }) =>
      aspectRatio && aspectRatio > 1 ? '400px' : '300px'};
    height: ${({ aspectRatio }) =>
      aspectRatio && aspectRatio > 1 ? '300px' : '400px'};
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  filter: grayscale(1);
  transition: 0.4s;
`;
