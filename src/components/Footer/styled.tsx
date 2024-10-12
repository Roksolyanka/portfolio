import styled from 'styled-components';

export const FooterStyle = styled.footer`
  padding: 20px 0;
  color: ${({ theme }) => theme.colors.browns[9]};
  text-align: center;
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
  font-size: 24px;
`;

export const Creator = styled.a`
  color: ${({ theme }) => theme.colors.browns[9]};
  transition: color 0.3s ease;

  &: hover {
    color: ${({ theme }) => theme.colors.blue[1]};
  }
`;
