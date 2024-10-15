import styled from 'styled-components';

export const FooterStyle = styled.footer`
  color: ${({ theme }) => theme.colors.browns[9]};
  text-align: center;
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
  font-size: 18px;
  padding: 20px 0 140px;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.tablet}px) {
    font-size: 20px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.laptop}px) {
    font-size: 24px;
    padding: 30px 0;
  }
`;

export const Creator = styled.a`
  color: ${({ theme }) => theme.colors.browns[9]};
  transition: color 0.3s ease;

  &: hover {
    color: ${({ theme }) => theme.colors.blue[6]};
  }
`;
