import personalData from '../../data/personalData';
import { getCurrentYear } from '../../helpers';
import { Creator, FooterStyle } from './styled';

const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <FooterStyle>
      <span>Copyright © {currentYear} </span>
      <Creator href={personalData.github} target='_blank'>
        {personalData.name}
      </Creator>
    </FooterStyle>
  );
};

export default Footer;
