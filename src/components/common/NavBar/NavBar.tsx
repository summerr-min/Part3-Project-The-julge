import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';

import LogoIcon from '@/assets/icons/logo_icon.svg?react';
import NotiOnIcon from '@/assets/icons/noti_icon_on.svg?react';
import NotiOffIcon from '@/assets/icons/noti_icon_off.svg?react';
import SearchIcon from '@/assets/icons/search_icon.svg?react';

import { getMyShopId, hasUnreadAlerts } from '@/api/common';
import * as S from './NavBar.styles';

const Navbar = () => {
  const { currentUser, logout } = useAuth();

  const isLoggedIn = !!currentUser;
  const isEmployer = currentUser?.type === 'employer';

  const [shopId, setShopId] = useState<string | null>(null);
  const [hasUnread, setHasUnread] = useState(false);

  useEffect(() => {
    if (!currentUser?.id) {
      setHasUnread(false);
      setShopId(null);
      return;
    }

    const userId = currentUser.id;

    // 알림 여부, 사장님이면 shopId를 동시에 조회
    (async () => {
      const [unread, shop] = await Promise.all([
        hasUnreadAlerts(userId).catch(() => false),
        isEmployer
          ? getMyShopId(userId).catch(() => null)
          : Promise.resolve(null),
      ]);

      setHasUnread(unread);
      setShopId(shop);
    })();
  }, [currentUser?.id, isEmployer]);

  const accountLabel = isEmployer ? '내 가게' : '내 프로필';

  // 내 프로필 / 내 가게 이동 경로 (용현님 코드 반영)
  const menuLink = !isEmployer
    ? '/profile'
    : shopId
      ? `/shops/${shopId}`
      : '/shops/register';

  return (
    <S.Header>
      <S.Nav>
        <S.LogoLink to="/">
          <LogoIcon />
        </S.LogoLink>

        <S.Middle>
          <S.SearchBar>
            <S.SearchIcon aria-hidden="true">
              <SearchIcon />
            </S.SearchIcon>
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
                {hasUnread ? <NotiOnIcon /> : <NotiOffIcon />}
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
};

export default Navbar;
