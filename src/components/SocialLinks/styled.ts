import styled from 'styled-components';

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
