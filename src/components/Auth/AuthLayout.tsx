import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import IconLogo from '@/assets/icons/logo_icon.svg?react';
import * as S from './AuthLayout.styles';

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <S.PageStyles>
      <S.CardStyles>
        <S.LogoAreaStyles>
          <Link to="/noticeList">
            <IconLogo />
          </Link>
        </S.LogoAreaStyles>
        {children}
      </S.CardStyles>
    </S.PageStyles>
  );
};

export default AuthLayout;