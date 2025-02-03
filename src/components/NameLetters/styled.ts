import styled from 'styled-components';
import { fadeIn } from '../../ui';

export const Name = styled.span`
  color: ${({ theme }) => theme.accentColor};
  font-size: 30px;
  animation: ${fadeIn} 1s ease-out forwards;

  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: 50px;
  }
`;

export const Letter = styled('span').withConfig({
  shouldForwardProp: (prop) => prop !== 'isCustom',
})<{ isCustom?: boolean }>`
  font-family: ${({ isCustom }) => (isCustom ? 'Splash' : 'Dancing Script')};
`;
