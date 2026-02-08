import EnvelopIcon from '@/assets/icons/envelope_icon.svg?react';
import FacebookIcon from '@/assets/icons/facebook_icon.svg?react';
import InstagramIcon from '@/assets/icons/instagram_icon.svg?react';
import {
  Wrapper,
  LeftWrapper,
  MiddleWrapper,
  RightWrapper,
  Icon,
} from '@/components/Footer/Footer.styles';

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
        <Icon>
          <EnvelopIcon />
        </Icon>
        <Icon>
          <FacebookIcon />
        </Icon>
        <Icon>
          <InstagramIcon />
        </Icon>
      </RightWrapper>
    </Wrapper>
  );
}

export default Footer;
