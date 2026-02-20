import { useContext, useEffect, useId, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { ProfileContext } from '@/contexts/ProfileContext';

import LogoIcon from '@/assets/icons/logo_icon.svg?react';
import NotiOnIcon from '@/assets/icons/noti_icon_on.svg?react';
import NotiOffIcon from '@/assets/icons/noti_icon_off.svg?react';
import SearchIcon from '@/assets/icons/search_icon.svg?react';

//import { AlertItem } from '@/types/user.types';
import { getMyShopId } from '@/api/common';
import Noti from '@/components/common/Noti/Noti';
import * as S from './NavBar.styles';

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const profileContext = useContext(ProfileContext);

  const isLoggedIn = !!currentUser;
  const isEmployer = currentUser?.type === 'employer';
  const isEmployee = currentUser?.type === 'employee';

  const [shopId, setShopId] = useState<string | null>(null);
  const [isNotiOpen, setIsNotiOpen] = useState(false);

  // profileContext에서 알림 데이터
  const alerts = profileContext?.alerts || [];
  const unreadCount = profileContext?.unreadCount || 0;
  // test 데이터 확인용

  ///
  //const alerts = mockAlerts;
  //const unreadCount = alerts.filter((a) => !a.item.read).length;

  const hasUnread = unreadCount > 0; // 안 읽은 알람이 1개라도 있으면 true

  const notiButtonRef = useRef<HTMLButtonElement | null>(null);
  const notiId = useId();

  useEffect(() => {
    const userId = currentUser?.id;

    if (!userId) {
      setShopId(null);
      setIsNotiOpen(false);
      return;
    }

    const fetchData = async () => {
      // 사장님만 shopId 체크
      if (isEmployer) {
        const shop = await getMyShopId(userId).catch(() => null);
        setShopId(shop);
      } else {
        setShopId(null);
      }
    };

    fetchData();
  }, [currentUser?.id, isEmployer]);

  const handleNotiClick = () => {
    if (!isEmployee) return;
    setIsNotiOpen((prev) => !prev);
  };

  const handleNotiClose = () => {
    setIsNotiOpen(false);
  };

  const accountLabel = isEmployer ? '내 가게' : '내 프로필';

  // 내 프로필 / 내 가게 이동 경로 (용현님 코드 반영)
  const menuLink = !isEmployer
    ? '/profile'
    : shopId
      ? `/shops/${shopId}`
      : '/shops/register';

  const handleLogout = () => {
    logout();
    navigate('/');
  };

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

              <S.TextButton type="button" onClick={handleLogout}>
                로그아웃
              </S.TextButton>

              <S.NotiWrapperStyles>
                <S.IconButton
                  ref={notiButtonRef}
                  type="button"
                  onClick={handleNotiClick}
                  disabled={!isEmployee}
                >
                  {hasUnread ? <NotiOnIcon /> : <NotiOffIcon />}
                </S.IconButton>

                {isNotiOpen && (
                  <Noti
                    id={notiId}
                    buttonRef={notiButtonRef}
                    onClose={handleNotiClose}
                    // Noti 컴포넌트로 데이터와 함수 넘겨줌
                    alerts={alerts}
                    onRead={profileContext?.markAsRead}
                  />
                )}
              </S.NotiWrapperStyles>
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
