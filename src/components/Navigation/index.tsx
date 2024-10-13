import React from 'react';
import { Icon } from '../Icon';
import theme from '../../theme';
import { Nav, StyledNavLink } from './styled';

const navLinks = [
  { path: '/', icon: 'icon-home', label: 'Home' },
  { path: '/about', icon: 'icon-user-check', label: 'About me' },
  { path: '/skills', icon: 'icon-cogs', label: 'Skills' },
  { path: '/projects', icon: 'icon-books', label: 'Projects' },
  { path: '/achievements', icon: 'icon-trophy', label: 'Achievements' },
  { path: '/contact', icon: 'icon-quill', label: 'Contact' },
];

const Navigation = () => (
  <Nav>
    {navLinks.map((item) => (
      <StyledNavLink key={item.path} to={item.path} title={item.label}>
        <Icon
          name={item.icon}
          width='24px'
          height='24px'
          fill={theme.colors.browns[9]}
        />
      </StyledNavLink>
    ))}
  </Nav>
);

export default Navigation;
