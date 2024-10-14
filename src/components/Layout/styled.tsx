import styled from 'styled-components';

export const Main = styled.main`
  padding: 15px;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.tablet}px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.laptop}px) {
    padding-left: 130px;
    padding-right: 130px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.desktop}px) {
    padding-left: 180px;
    padding-right: 180px;
  }
`;
