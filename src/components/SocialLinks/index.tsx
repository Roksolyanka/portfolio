import personalData from '../../data/personal';
import { Icon } from '../Icon';

import { StyledSocial } from './styled';
import { FlexBox } from '../../ui';
import theme from '../../theme';

const SocialLinks = () => (
  <FlexBox justifyContent='center' gap='20px' margin='18px 0'>
    <StyledSocial
      target='_blank'
      href={personalData.github}
      rel='noopener noreferrer'
    >
      <Icon
        name='icon-github'
        width='30px'
        height='30px'
        fill={theme.colors.browns[9]}
        className='social-icon'
      />
    </StyledSocial>
    <StyledSocial
      target='_blank'
      href={personalData.linkedIn}
      rel='noopener noreferrer'
    >
      <Icon
        name='icon-linkedin'
        width='30px'
        height='30px'
        fill={theme.colors.browns[9]}
        className='social-icon'
      />
    </StyledSocial>
    <StyledSocial
      target='_blank'
      href={personalData.telegram}
      rel='noopener noreferrer'
    >
      <Icon
        name='icon-telegram'
        width='30px'
        height='30px'
        fill={theme.colors.browns[9]}
        className='social-icon'
      />
    </StyledSocial>
  </FlexBox>
);

export default SocialLinks;
