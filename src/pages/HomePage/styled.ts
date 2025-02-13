import styled from 'styled-components';

export const TitleH1 = styled.h1`
  text-align: center;
  font-family: 'EB Garamond', serif;
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.textColor};

  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-weight: 800;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: 30px;
  }
`;

export const TextSpecialty = styled.span`
  color: ${({ theme }) => theme.colors.orange[5]};
`;

export const StyledSocial = styled.a`
  .social-icon {
    fill: ${({ theme }) => theme.textColor};
  }

  &:hover .social-icon {
    transform: scale(2);
    transition: transform 0.8s ease, fill 0.8s ease;
    fill: ${({ theme }) => theme.colors.green[4]};
  }

  &:not(:hover) .social-icon {
    transform: scale(1);
    transition: transform 0.8s ease;
  }
`;

export const TextDownload = styled.span`
  font-family: 'EB Garamond', serif;
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.textColor};

  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-weight: 800;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: 24px;
  }
`;
