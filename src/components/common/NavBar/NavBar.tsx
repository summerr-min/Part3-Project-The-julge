import { useEffect, useId, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

import LogoIcon from '@/assets/icons/logo_icon.svg?react';
import NotiOnIcon from '@/assets/icons/noti_icon_on.svg?react';
import NotiOffIcon from '@/assets/icons/noti_icon_off.svg?react';
import SearchIcon from '@/assets/icons/search_icon.svg?react';

import { getMyShopId, hasUnreadAlerts } from '@/api/common';
import Noti from '@/components/common/Noti/Noti';
import * as S from './NavBar.styles';

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const isLoggedIn = !!currentUser;
  const isEmployer = currentUser?.type === 'employer';
  const isEmployee = currentUser?.type === 'employee';

  const [shopId, setShopId] = useState<string | null>(null);
  const [hasUnread, setHasUnread] = useState(false);
  const [isNotiOpen, setIsNotiOpen] = useState(false);
  const [keyword, setKeyword] = useState('');

  const notiButtonRef = useRef<HTMLButtonElement | null>(null);
  const notiId = useId();

  useEffect(() => {
    const userId = currentUser?.id;

    if (!userId) {
      setHasUnread(false);
      setShopId(null);
      setIsNotiOpen(false);
      return;
    }

    const fetchData = async () => {
      if (isEmployee) {
        const unread = await hasUnreadAlerts(userId).catch(() => false);
        setHasUnread(unread);
      } else {
        setHasUnread(false);
      }

      if (isEmployer) {
        const shop = await getMyShopId(userId).catch(() => null);
        setShopId(shop);
      } else {
        setShopId(null);
      }
    };

    fetchData();
  }, [currentUser?.id, isEmployer, isEmployee]);

  const handleNotiClick = () => {
    if (!isEmployee) return;
    setIsNotiOpen((prev) => !prev);
  };

  const handleNotiClose = () => {
    setIsNotiOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleSearchSubmit = () => {
    const q = keyword.trim();
    navigate(q ? `/notices?search=${encodeURIComponent(q)}` : '/notices');
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearchSubmit();
  };

  const accountLabel = isEmployer ? '내 가게' : '내 프로필';

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
            <S.SearchInput
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              placeholder="가게 이름으로 찾아보세요"
            />
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