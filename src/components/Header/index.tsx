import { Link } from 'react-router-dom';

import ThemeToggler from '../ThemeToggler';

import { HeaderStyle, Logo } from './styled';

const Header = () => (
  <HeaderStyle>
    <Logo as={Link} to='./'>
      RK
    </Logo>
    <ThemeToggler />
  </HeaderStyle>
);

export default Header;
