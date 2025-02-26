import styled from 'styled-components';
import { fadeIn } from '../../ui';

export const PersonalPhoto = styled.img`
  width: fit-content;
  height: 260px;
  border-radius: 50%;
  color: transparent;
  float: right;
  margin: 0 auto;
  cursor: pointer;
  animation: ${fadeIn} 1s ease-out forwards;

  &:hover {
    filter: grayscale(0%);
    transform: scale(1.1);
    transition: all 0.8s ease;
  }

  &:not(:hover) {
    transform: scale(1);
    filter: grayscale(60%);
    transition: all 0.8s ease;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    height: 300px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    height: 350px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[4]}) {
    height: 400px;
  }
`;

export const TextAccent = styled.span`
  color: ${({ theme }) => theme.colors.orange[5]};
  font-weight: bold;
`;
