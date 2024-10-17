import styled from 'styled-components';
import { FlexBox } from '../../ui/Box';
import { Link } from 'react-router-dom';

export const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  gap: 12px;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.tablet}px) {
    gap: 15px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.laptop}px) {
    gap: 15px;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledText = styled.p`
  text-align: center;
  font-family: 'EB Garamond', serif;
  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.browns[9]};

  @media (min-width: ${({ theme }) => theme.breakpoints.values.laptop}px) {
    font-size: 18px;
  }
`;

export const PersonalPhoto = styled.img`
  width: fit-content;
  height: 260px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.blue[8]};
  box-shadow: ${({ theme }) => theme.colors.boxShadow[3]}
  color: transparent;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.tablet}px) {
    height: 220px;
  }

@media (min-width: ${({ theme }) => theme.breakpoints.values.laptop}px) {
    height: 265px;
  }
`;

export const ButtonWrapper = styled(FlexBox)`
  max-width: 500px;
  width: 100%;
  gap: 10px;
`;

export const ButtonLink = styled.a`
  display: flex;
  font-family: 'EB Garamond', serif;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 10px;
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.blue[0]}; 
  background: ${({ theme }) => theme.colors.gradient[0]}; 
  border: none;
  border-radius: 10px;
  text-decoration: none;
  transition: background 0.5s ease, transform 0.3s ease;
  box-shadow: ${({ theme }) => theme.colors.boxShadow[3]}
  flex: 1; 

  & > svg {
  width: 18px;
  height: 18px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.gradient[1]}; 
    transform: translateY(-4px); 
    transition: background 1s ease-out;
  }

  &:active {
    transform: translateY(0);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.tablet}px) {
    font-size: 15px;

    & > svg {
    width: 20px;
    height: 20px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.laptop}px) {
    font-size: 18px;
    padding: 12px;

    & > svg {
    width: 24px;
    height: 24px;
    }
  }
`;

export const StyledLink = styled(Link)`
  font-family: 'EB Garamond', serif;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.blue[6]};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.blue[8]};
    transition: color 0.3s ease, transform 0.3s ease;
    transform: translateY(-2px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.tablet}px) {
    font-size: 18px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.laptop}px) {
    font-size: 20px;
  }
`;
