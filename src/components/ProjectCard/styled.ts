import styled from 'styled-components';
import { AbsoluteBox, FlexBox, TextP } from '../../ui';

export const Input = styled.input`
  display: none;
`;

export const Blackout = styled(FlexBox)`
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 25%,
    rgba(0, 0, 0, 0.034138655462184864) 70%
  );
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Card = styled.label<{ $background: string }>`
  position: relative;
  height: 80px;
  width: 90%;
  margin: 5px auto;
  cursor: pointer;
  overflow: hidden;
  border-radius: 40px;
  transition: all 0.6s ease;
  background-image: ${({ $background }) => `url(${$background})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: ${({ theme }) => theme.boxShadowNav};
  scroll-snap-align: start;

  ${Input}:checked + & {
    height: 350px;
    background-image: ${({ $background }) => `url(${$background})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    ${Blackout} {
      div {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    flex-shrink: 0;
    height: 100%;
    width: 10%;
    max-width: 80px;
    margin: 0 10px;

    ${Input}:checked + & {
      width: 70%;
      max-width: 740px;
      height: 100%;
    }
  }
`;

export const IconContainer = styled(FlexBox)`
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.6s ease;
  z-index: 1;

  ${Input}:checked + ${Card} & {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.green[4]};
  border-radius: 50%;
  transition: background 0.6s;

  &:hover svg {
    transform: scale(1.7);
    transition: transform 0.8s ease;
  }

  &:not(:hover) svg {
    transform: scale(1);
    transition: transform 0.8s ease;
  }
`;

export const Badge = styled(AbsoluteBox)`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  white-space: nowrap;
  text-transform: uppercase;
  border: 2px solid ${({ theme }) => theme.colors.green[10]};
  opacity: 0;
  transition: opacity 0.6s ease;

  ${Input}:checked + ${Card} & {
    opacity: 1;
  }
`;

export const Details = styled(FlexBox)`
  opacity: 0;
  transform: translateY(40px);
  transition: 0.6s;
`;

export const ProjectName = styled.h3`
  color: ${({ theme }) => theme.colors.green[5]};
  font-size: 24px;
  font-family: 'EB Garamond', serif;

  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: 30px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: 36px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    font-size: 44px;
  }
`;

export const Description = styled(TextP)`
  color: ${({ theme }) => theme.colors.green[0]};
  font-size: 12px;
  text-align: start;

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: 14px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    font-size: 16px;
  }
`;

export const Skills = styled(TextP)`
  color: ${({ theme }) => theme.colors.orange[5]};
  font-size: 10px;
  text-align: end;

  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: 12px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: 14px;
  }
`;

export const Numeration = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  padding: 14px;
  font-size: 24px;
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
  background: ${({ theme }) => theme.colors.green[4]};
  color: ${({ theme }) => theme.colors.green[10]};
  border-radius: 50%;
  margin: -65px 15px 15px;
  opacity: 1;
  transition: opacity 0.8 ease;

  ${Input}:checked + ${Card} & {
    display: none;
    opacity: 0;
    transition: display 0.6s ease;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    margin: 265px 15px 15px;
  }
`;
