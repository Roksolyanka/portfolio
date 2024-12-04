import styled from 'styled-components';

export const AboutSection = styled.section`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const PersonalPhoto = styled.img`
  width: fit-content;
  height: 260px;
  border-radius: 50%;
  color: transparent;
  float: right;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    filter: grayscale(0%);
    transform: scale(1.1);
    transition: all 0.8s ease;
  }

  &:not(:hover) {
    transform: scale(1);
    filter: grayscale(60%);
    transition: all 0.8s ease;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    height: 300px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    height: 350px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[4]}) {
    height: 400px;
  }
`;

export const TextP = styled.p`
  text-align: center;
  font-family: 'EB Garamond', serif;
  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.textColor};
  margin: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: 18px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: 20px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    font-size: 22px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    font-size: 24px;
  }
`;

export const TextAccent = styled.span`
  color: ${({ theme }) => theme.colors.orange[5]};
  font-weight: bold;
`;

