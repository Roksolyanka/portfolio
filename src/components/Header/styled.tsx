import styled from 'styled-components';

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  position: sticky;
  top: 0;
  backdrop-filter: blur(5px) saturate(100%);

  @media (min-width: ${({ theme }) => theme.breakpoints.values.laptop}px) {
    padding-left: 150px;
    padding-right: 150px;
  }
`;

export const Logo = styled.a`
  font-family: 'Splash', cursive;
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.colors.blue[5]};
`;
