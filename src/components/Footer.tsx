// import EnvelopIcon from '@/assets/icons/envelope_icon.svg?react';
// import FacebookIcon from '@/assets/icons/facebook_icon.svg?react';
// import InstagramIcon from '@/assets/icons/instagram_icon.svg?react';
import {
  Wrapper,
  LeftWrapper,
  MiddleWrapper,
  RightWrapper,
  Icon,
} from '@/styles/FooterStyles';

function Footer() {
  return (
    <Wrapper>
      <LeftWrapper>
        <p>©codeit - 2023</p>
      </LeftWrapper>

      <MiddleWrapper>
        <p>Privacy Policy</p>
        <p>FAQ</p>
      </MiddleWrapper>

      <RightWrapper>
        <Icon></Icon>
        <Icon></Icon>
        <Icon></Icon>
      </RightWrapper>
    </Wrapper>
  );
}

export default Footer;
