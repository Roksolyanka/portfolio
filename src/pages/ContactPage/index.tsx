import personalData from '../../data/personal';
import { ROUTE_HOME } from '../../constants';
import { Icon } from '../../components/Icon';
import SocialLinks from '../../components/SocialLinks';
import background from '../../assets/background.svg';

import {
  Background,
  FlexBox,
  Paragraph,
  Section,
  StyledLink,
  StyledParagraph,
  TitleH2,
} from '../../ui';
import { AnimationFlexBox, ContactLink } from './styled';
import theme from '../../theme';

const ContactPage = () => (
  <Section
    aria-label='contact section'
    flexDirection='column'
    justifyContent='center'
    gap='20px'
  >
    <Background
      alt='Hero'
      loading='lazy'
      width={1572}
      height={620}
      decoding='async'
      src={background}
    />
    <FlexBox flexDirection='column' gap='10px'>
      <TitleH2>Feel free to reach out!</TitleH2>
      <StyledParagraph>
        Whether you'd like to learn more about my work, discuss a project, or
        just say hello, drop me a message—I'd love to connect!
      </StyledParagraph>
    </FlexBox>
    <AnimationFlexBox
      gap='10px'
      flexWrap='wrap'
      justifyContent='center'
      padding={[0, 0, '20px 0', '40px 0', '50px 0']}
    >
      <ContactLink
        target='_blank'
        href={`mailto:${personalData.email}`}
        rel='noopener noreferrer'
      >
        <Icon
          name='icon-mail'
          width='30px'
          height='30px'
          fill={theme.colors.browns[9]}
        />
        <Paragraph>Email</Paragraph>
        <Paragraph>{personalData.email}</Paragraph>
      </ContactLink>
      <ContactLink href={`tel:${personalData.phone}`} rel='noopener noreferrer'>
        <Icon
          name='icon-phone'
          width='30px'
          height='30px'
          fill={theme.colors.browns[9]}
        />
        <Paragraph>Phone</Paragraph>
        <Paragraph>{personalData.phone}</Paragraph>
      </ContactLink>
      <ContactLink
        target='_blank'
        href={personalData.addressLink}
        rel='noopener noreferrer'
      >
        <Icon
          name='icon-location'
          width='30px'
          height='30px'
          fill={theme.colors.browns[9]}
        />
        <Paragraph>Location</Paragraph>
        <Paragraph>{personalData.address}</Paragraph>
      </ContactLink>
    </AnimationFlexBox>
    <SocialLinks />
    <StyledLink to={ROUTE_HOME}>🏡 Welcome Home &#10174;</StyledLink>
  </Section>
);

export default ContactPage;
