import ThemeToggler from '../ThemeToggler';
import { HeaderStyle, Logo } from './styled';

const Header = () => {
  return (
    <HeaderStyle>
      <Logo href='/'>RK</Logo>
      <ThemeToggler></ThemeToggler>
    </HeaderStyle>
  );
};

export default Header;
