import styled from 'styled-components';

export const FooterStyle = styled.footer`
  color: ${({ theme }) => theme.colors.browns[9]};
  text-align: center;
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
  font-size: 16px;
  padding: 10px 0 80px;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.laptop}px) {
    font-size: 18px;
    padding: 14px;
  }
`;

export const Creator = styled.a`
  color: ${({ theme }) => theme.colors.browns[9]};
  transition: color 0.3s ease;

  &: hover {
    color: ${({ theme }) => theme.colors.blue[6]};
  }
`;
