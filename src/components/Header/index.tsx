import { Icon } from '../Icon';
import { HeaderStyle, Logo, ThemeTogglerButton } from './styled';

const Header = () => {
  return (
    <HeaderStyle>
      <Logo href='/'>RK</Logo>
      <ThemeTogglerButton
        type='button'
        role='switch'
        aria-label='theme mode switch'
      >
        <Icon name='icon-moon-fill' width='30px' height='30px'></Icon>
      </ThemeTogglerButton>
    </HeaderStyle>
  );
};

export default Header;
