import { NavLink, NavLinkProps } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

interface StyledNavLinkProps extends NavLinkProps {
  tooltip: string;
}

const hoverAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.3);
  }
`;

const spin = keyframes`
  from {
    opacity: 0;
    transform: scale(0.2) rotate(0deg);
  }
  to {
    opacity: 1;
    transform: scale(1.3) rotate(360deg);
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  max-width: fit-content;
  bottom: 0;
  padding: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50px;
  box-shadow: 0 -2px 20px rgba(0, 0, 0, 0.4);
  background: ${({ theme }) => theme.colors.browns[0]};
  opacity: 0.8;
  transition: background 0.15s cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: ${({ theme }) => theme.breakpoints.values.laptop}px) {
    flex-direction: column;
    max-height: fit-content;
    top: 50%;
    left: 5%;
  }
`;

export const StyledNavLink = styled(NavLink)<StyledNavLinkProps>`
  position: relative;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.browns[9]};
  text-decoration: none;
  padding: 13px;
  border-radius: 50px;
  transition: color 0.3s, background 0.7s ease-in-out;

  &.active svg {
    fill: ${({ theme }) => theme.colors.blue[8]};
    animation: ${spin} 0.5s ease forwards;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.browns[0]};
    background: ${({ theme }) => theme.colors.browns[4]};
    animation: ${hoverAnimation} 0.7s ease forwards;
  }

  &:hover svg {
    transform: scale(1.3);
    transition: transform 0.3s ease;
  }

  &:not(:hover) {
    background: transparent;
  }

  &:not(:hover) svg {
    transform: scale(1);
    transition: transform 0.3s ease;
  }

  &::after {
    content: attr(tooltip);
    position: absolute;
    bottom: 80%;
    left: 80%;
    background-color: ${({ theme }) => theme.colors.browns[9]};
    color: ${({ theme }) => theme.colors.blue[0]};
    padding: 5px;
    border-radius: 5px;
    opacity: 0;
    white-space: nowrap;
    pointer-events: none;
    transform: translate(20%, 20px);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }

  &:hover::after {
    opacity: 0.8;
    transform: translate(5%, 0px);
    transition: transform 2s ease;
  }

`;
