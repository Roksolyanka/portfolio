import React from 'react';
import { Icon } from '../Icon';
import theme from '../../theme';
import { Nav, StyledNavLink } from './styled';
import { ROUTES } from '../../constants';

interface NavLink {
  path: string;
  icon: string;
  label: string;
}

const navLinks: NavLink[] = [
  { path: ROUTES.HOME, icon: 'icon-home', label: 'Home' },
  { path: ROUTES.ABOUT, icon: 'icon-user-check', label: 'About me' },
  { path: ROUTES.SKILLS, icon: 'icon-cogs', label: 'Skills' },
  { path: ROUTES.PROJECTS, icon: 'icon-books', label: 'Projects' },
  { path: ROUTES.ACHIEVEMENTS, icon: 'icon-trophy', label: 'Achievements' },
  { path: ROUTES.CONTACT, icon: 'icon-quill', label: 'Contact' },
];

const Navigation = () => (
  <Nav>
    {navLinks.map((item) => (
      <StyledNavLink key={item.path} to={item.path} tooltip={item.label}>
        <Icon
          name={item.icon}
          fill={theme.colors.browns[9]}
        />
      </StyledNavLink>
    ))}
  </Nav>
);

export default Navigation;
