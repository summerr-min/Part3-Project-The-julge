import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';

export function useAuth() {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error(
      'AuthProvider로 감싸지 않은 곳에서 useAuth를 사용했습니다.'
    );
  }

  return auth;
}
