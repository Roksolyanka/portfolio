import React from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About me' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/achievements', label: 'Achievements' },
  { path: '/contact', label: 'Contact' },
];

const Navigation = () => (
  <nav>
    {navLinks.map((item) => (
      <NavLink key={item.path} to={item.path}>
        {item.label}
      </NavLink>
    ))}
  </nav>
);

export default Navigation;
