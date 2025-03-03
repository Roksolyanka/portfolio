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
