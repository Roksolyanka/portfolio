import personalData from '../../data/personal';
import { getCurrentYear } from '../../helpers';

import { Creator, FooterStyle } from './styled';

const { name, github } = personalData;

const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <FooterStyle>
      <span>Copyright © {currentYear} </span>
      <Creator href={github} target='_blank'>
        {name}
      </Creator>
    </FooterStyle>
  );
};

export default Footer;
