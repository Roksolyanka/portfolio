import styled from 'styled-components';

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.tablet}) {
  }
`;

export const Logo = styled.a`
  font-family: 'Splash', cursive;
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.colors.blue[1]};
`;

export const ThemeTogglerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
