import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
   background: linear-gradient(
    90deg,
    rgba(190, 160, 138, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
    transition: background 0.3s ease, color 0.3s ease;
  }

  body.dark {
  background: linear-gradient(
    90deg,
    rgba(87, 62, 55, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  color: ${({ theme }) => theme.colors.browns[1]};
  }

  // !--------------------------FOOTER-----------------------

  body.dark footer {
    color: ${({ theme }) => theme.colors.browns[1]};
  }

  body.dark footer a {
  color: ${({ theme }) => theme.colors.browns[1]};
  }
 
`;
