import EnvelopIcon from '@/assets/icons/envelope_icon.svg';
import FacebookIcon from '@/assets/icons/facebook_icon.svg';
import InstagramIcon from '@/assets/icons/instagram_icon.svg';
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
