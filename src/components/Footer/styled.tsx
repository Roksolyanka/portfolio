import styled from 'styled-components';

export const FooterStyle = styled.footer`
  padding: 20px 0;
  color: ${({ theme }) => theme.colors.browns[9]};
  text-align: center;
`;

export const Creator = styled.a`
  color: ${({ theme }) => theme.colors.browns[9]};

  &: hover {
    color: ${({ theme }) => theme.colors.blue[1]};
  }
`;
