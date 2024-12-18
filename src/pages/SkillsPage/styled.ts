import styled, { keyframes } from 'styled-components';

export const anime = keyframes`
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const SkillsSection = styled('section').withConfig({
  shouldForwardProp: (prop) => prop !== 'isAccordeon',
})<{ isAccordeon?: boolean }>`
  display: flex;
  gap: 20px;
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 15px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  flex-direction: ${({ isAccordeon }) => (isAccordeon ? 'column' : 'row')};
  align-content: ${({ isAccordeon }) => (isAccordeon ? 'center' : 'normal')};

  @media (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    gap: 30px;
  }
`;

export const TitleH2 = styled.h2`
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
