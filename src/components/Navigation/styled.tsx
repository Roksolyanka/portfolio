import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  gap: 23px;
  justify-content: center;
  align-items: center;
  position: fixed;
  max-width: fit-content;
  bottom: 0;
  padding: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50px;
  box-shadow: 0 -2px 20px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px) saturate(80%);
  background: ${({ theme }) => theme.colors.browns[0]};
  opacity: 0.8;
  transition: background 0.15s cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: ${({ theme }) => theme.breakpoints.values.laptop}px) {
    flex-direction: column;
    width: auto;
    max-height: fit-content;
    top: 50%;
    left: 5%;
  }
`;

export const StyledNavLink = styled(NavLink)`
  position: relative;
  transition: fill 0.3s ease-in-out;

  &.active svg {
    fill: ${({ theme }) => theme.colors.blue[8]};
  }

  &:hover svg {
    fill: ${({ theme }) => theme.colors.blue[5]};
  }

  &::after {
    content: attr(title);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.colors.browns[9]};
    color: ${({ theme }) => theme.colors.blue[0]};
    padding: 5px;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.15s ease-in-out;
    white-space: nowrap;
    pointer-events: none;
  }

  &:hover::after {
    opacity: 0.8;
  }
`;
