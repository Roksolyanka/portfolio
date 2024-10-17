import styled from 'styled-components';

export const Name = styled.h2`
  text-align: center;
  font-family: 'Dancing Script', cursive;
  font-weight: 400;
  font-size: 34px;
  color: ${({ theme }) => theme.colors.browns[9]};

  @media (min-width: ${({ theme }) => theme.breakpoints.values.tablet}px) {
    font-size: 34px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.laptop}px) {
    font-size: 50px;
  }
`;
