import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { fetchCurrentUser, UserType } from '@/api/authUser';

type AuthUser = {
  id: string;
  type: UserType;
};

type AuthContextValue = {
  isLoggedIn: boolean;

  token: string | null;
  currentUser: AuthUser | null;
  login: (args: {
    token: string;
    userId?: string;
    userType?: UserType;
  }) => void;
  logout: () => void;
  refreshCurrentUser: () => Promise<void>;
  setCurrentUser: (user: AuthUser | null) => void;
};

export const AuthContext = createContext<AuthContextValue | null>(null);

// localStorage 모음
const STORAGE_KEYS = {
  token: 'accessToken',
  userId: 'userId',
  userType: 'userType',
} as const;

function isUserType(value: string | null): value is UserType {
  return value === 'employee' || value === 'employer';
}

function isAuthError(error: unknown) {
  return (
    axios.isAxiosError(error) &&
    (error.response?.status === 401 || error.response?.status === 403)
  );
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem(STORAGE_KEYS.token);
  });

  const [currentUser, setCurrentUser] = useState<AuthUser | null>(() => {
    const id = localStorage.getItem(STORAGE_KEYS.userId);
    const savedType = localStorage.getItem(STORAGE_KEYS.userType);
    const type = isUserType(savedType) ? savedType : null;

    return id && type ? { id, type } : null;
  });

  const isLoggedIn = !!token;

  const login: AuthContextValue['login'] = ({ token, userId, userType }) => {
    // 로그인하면 토큰 저장
    localStorage.setItem(STORAGE_KEYS.token, token);
    setToken(token);

    if (userId) localStorage.setItem(STORAGE_KEYS.userId, userId);
    if (userType) localStorage.setItem(STORAGE_KEYS.userType, userType);

    // Navbar 바로 바뀌게
    const id = userId ?? localStorage.getItem(STORAGE_KEYS.userId);
    const type =
      userType ??
      (() => {
        const saved = localStorage.getItem(STORAGE_KEYS.userType);
        return isUserType(saved) ? saved : null;
      })();

    if (id && type) {
      setCurrentUser({ id, type });
    }
  };

  const logout: AuthContextValue['logout'] = () => {
    localStorage.removeItem(STORAGE_KEYS.token);
    localStorage.removeItem(STORAGE_KEYS.userId);
    localStorage.removeItem(STORAGE_KEYS.userType);

    setToken(null);
    setCurrentUser(null);
  };

  const refreshCurrentUser: AuthContextValue['refreshCurrentUser'] =
    async () => {
      const savedToken = localStorage.getItem(STORAGE_KEYS.token);
      const userId = localStorage.getItem(STORAGE_KEYS.userId);

      if (!savedToken || !userId) return;

      try {
        const res = await fetchCurrentUser(userId);
        const me = res.item;

        localStorage.setItem(STORAGE_KEYS.userId, me.id);
        localStorage.setItem(STORAGE_KEYS.userType, me.type);

        setCurrentUser({ id: me.id, type: me.type });
        setToken(savedToken);
      } catch (error) {
        if (isAuthError(error)) {
          logout();
        }
      }
    };

  useEffect(() => {
    // 토큰은 있는데 유저 정보가 없으면 한번 불러옴
    if (token && !currentUser) {
      refreshCurrentUser();
    }
  }, [token, currentUser]);

  const value: AuthContextValue = {
    isLoggedIn,
    token,
    currentUser,
    login,
    logout,
    refreshCurrentUser,
    setCurrentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
