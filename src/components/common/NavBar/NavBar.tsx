import { useAuth } from '@/hooks/useAuth';
import LogoIcon from '@/assets/icons/logo_icon.svg?react';
import NotiOnIcon from '@/assets/icons/noti_icon_on.svg?react';
import NotiOffIcon from '@/assets/icons/noti_icon_off.svg?react';
import SearchIcon from '@/assets/icons/search_icon.svg?react';
import * as S from './NavBar.styles';

const Navbar = () => {
  const { currentUser, logout } = useAuth();

  const isLoggedIn = !!currentUser;

  // 기본값(직원)
  let accountLabel = '내 프로필';
  let menuLink = '/profile';

  // 사장님이면 메뉴 다르게
  if (currentUser?.type === 'employer') {
    accountLabel = '내 가게';

    // 추후 shopId 페이지 연결
    //   menuLink = currentUser.shopId
    //     ? `/shops/${currentUser.shopId}`
    //     : '/shops/register/';
    // }

    // 알림 API 연결 후 수정 예정
    const mockHasNotification = true;

    return (
      <S.Header>
        <S.Nav>
          <S.LogoLink to="/noticeList">
            <LogoIcon />
          </S.LogoLink>

          <S.Middle>
            <S.SearchBar>
              <S.SearchIcon aria-hidden="true">
                <SearchIcon />
              </S.SearchIcon>

              {/* 공고리스트 나오면 수정 예정 */}
              <S.SearchInput placeholder="가게 이름으로 찾아보세요" />
            </S.SearchBar>
          </S.Middle>

          <S.Right>
            {isLoggedIn ? (
              <>
                <S.MenuLink to={menuLink}>{accountLabel}</S.MenuLink>

                <S.TextButton type="button" onClick={logout}>
                  로그아웃
                </S.TextButton>

                <S.IconButton type="button" aria-label="알림">
                  {mockHasNotification ? <NotiOnIcon /> : <NotiOffIcon />}
                </S.IconButton>
              </>
            ) : (
              <S.AuthFrame>
                <S.AuthLink to="/login">로그인</S.AuthLink>
                <S.AuthLink to="/signup">회원가입</S.AuthLink>
              </S.AuthFrame>
            )}
          </S.Right>
        </S.Nav>
      </S.Header>
    );
  }
};

export default Navbar;
