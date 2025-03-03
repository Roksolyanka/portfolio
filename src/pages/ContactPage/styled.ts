import styled from 'styled-components';
import { fadeIn, FlexBox } from '../../ui';

export const AnimationFlexBox = styled(FlexBox)`
  animation: ${fadeIn} 1s ease-out forwards;
`;

export const ContactLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  border: thick double ${({ theme }) => theme.colors.orange[6]};
  border-radius: 20px;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.orange[3]};
  padding: 5px 0;
  color: ${({ theme }) => theme.colors.browns[9]};
  transition: all 0.6s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange[6]};
    border: thick double ${({ theme }) => theme.colors.orange[3]};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    padding: 20px 0;
    gap: 8px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    width: 300px;
  }
`;
