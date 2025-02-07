import { Icon } from '../Icon';
import {
  ROUTE_ABOUT,
  ROUTE_ACHIEVEMENTS,
  ROUTE_CONTACT,
  ROUTE_HOME,
  ROUTE_PROJECTS,
  ROUTE_SKILLS,
} from '../../constants';
import { NavLinkType } from '../../types';

import theme from '../../theme';
import { Nav, StyledNavLink } from './styled';

const navLinks: NavLinkType = [
  { path: ROUTE_HOME, icon: 'icon-home', label: 'Home' },
  { path: ROUTE_ABOUT, icon: 'icon-user-check', label: 'About me' },
  { path: ROUTE_SKILLS, icon: 'icon-cogs', label: 'Skills' },
  { path: ROUTE_PROJECTS, icon: 'icon-books', label: 'Projects' },
  { path: ROUTE_ACHIEVEMENTS, icon: 'icon-trophy', label: 'Achievements' },
  { path: ROUTE_CONTACT, icon: 'icon-quill', label: 'Contact' },
];

const Navigation = () => (
  <Nav>
    {navLinks.map(({ path, icon, label }) => (
      <StyledNavLink key={path} to={path} tooltip={label}>
        <Icon
          name={icon}
          width='18px'
          height='18px'
          fill={theme.colors.green[10]}
          className='icon-navigation'
        />
      </StyledNavLink>
    ))}
  </Nav>
);

export default Navigation;
