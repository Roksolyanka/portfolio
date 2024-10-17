import styled from 'styled-components';

export const Main = styled.main`
  padding: 0 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.tablet}px) {
    padding: 0 10px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.laptop}px) {
    padding: 0 120px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.desktop}px) {
    padding: 0 130px;
  }
`;
