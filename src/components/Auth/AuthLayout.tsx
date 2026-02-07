import { ReactNode } from 'react';
// import { Link } from 'react-router-dom';
import IconLogo from '@/assets/icons/logo_icon.svg?react';

// styled-components 모음
import {
  CardStyles,
  FooterStyles,
  FormStyles,
  FieldStyles,
  IconStyles,
  InputStyles,
  LabelStyles,
  LogoAreaStyles,
  PageStyles,
  PrimaryButtonStyles,
  ToggleButtonStyles,
  ToggleRowStyles,
  ToggleWrapStyles,
  ErrorTextStyles,
} from './AuthLayout.styles';

// 스타일 컴포넌트들을 export
export const Form = FormStyles;
export const Field = FieldStyles;
export const Label = LabelStyles;
export const Input = InputStyles;
export const ErrorText = ErrorTextStyles;
export const PrimaryButton = PrimaryButtonStyles;
export const Footer = FooterStyles;
export const ToggleWrap = ToggleWrapStyles;
export const ToggleRow = ToggleRowStyles;
export const ToggleButton = ToggleButtonStyles;
export const Icon = IconStyles;

type AuthLayoutProps = {
  // 로그인, 회원가입 폼 컴포넌트
  children: ReactNode;
};

// 로그인, 회원가입 페이지의 공통 레이아웃
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <PageStyles>
      <CardStyles>
        <LogoAreaStyles>
          {/* <Link to="noticeList"> */}
          <IconLogo />
          {/* </Link> */}
        </LogoAreaStyles>
        {children}
      </CardStyles>
    </PageStyles>
  );
};

export default AuthLayout;
