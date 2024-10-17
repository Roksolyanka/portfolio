import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
   background: ${({ theme }) => theme.colors.gradient[2]};
   transition: background 0.3s ease, color 0.3s ease;
  }

  body.dark {
  background: ${({ theme }) => theme.colors.gradient[3]};
  }

   body.dark h1,
  body.dark h2,
  body.dark h3,
  body.dark p,
  body.dark a {
    color: ${({ theme }) => theme.colors.browns[1]};
  }

  // !--------------------------HEADER-----------------------

   body.dark header a {
    color: ${({ theme }) => theme.colors.blue[5]};
  }

   // !------------------------NAVIGATION--------------------

  body.dark nav {
  box-shadow: ${({ theme }) => theme.colors.boxShadow[2]};
  }

  // !-------------------------HOMEPAGE----------------------

   body.dark .sectionHome img {
    box-shadow: ${({ theme }) => theme.colors.boxShadow[2]};
  }

   body.dark .sectionHome .buttonDownload {
    box-shadow: ${({ theme }) => theme.colors.boxShadow[2]};
  }

  body.dark .sectionHome .navigation-link {
  color: ${({ theme }) => theme.colors.blue[6]};

   &:hover {
    color: ${({ theme }) => theme.colors.blue[8]};
  }
  }

  // !--------------------------FOOTER-----------------------

  body.dark footer {
    color: ${({ theme }) => theme.colors.browns[1]};
  }
 
`;
