import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { getMyProfile } from '@/api/user';
import { AuthContext } from '@/contexts/AuthContext';

// Context 데이터 타입 정의
interface ProfileState {
  isProfileExist: boolean; // 프로필 등록 여부
  profileData: any;
  isLoading: boolean; // 예외처리
  checkProfileFromServer: () => Promise<void>; // 상태 함수
}

export const ProfileContext = createContext<ProfileState | null>(null);

export function ProfileStorage({ children }: { children: ReactNode }) {
  const auth = useContext(AuthContext);
  const [isProfileExist, setIsProfileExist] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // 서버에서 최신 프로필 정보 get
  const checkProfileFromServer = async () => {
    // Context 유저ID -> 로컬스토리지 ID 우선순위 확인
    const userId = auth?.currentUser?.id || localStorage.getItem('userId');

    if (!userId) {
      console.log('유저 ID를 찾을 수 없어 조회를 중단합니다.');
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      const response = await getMyProfile(userId);
      const userData = response.item;

      setProfileData(userData);
      // 이름 데이터 존재 여부로 프로필 등록 상태 판단
      setIsProfileExist(!!(userData && userData.name));
    } catch (error) {
      console.error('프로필 조회 실패:', error);
      setIsProfileExist(false);
      setProfileData(null);
    } finally {
      // 성공/실패 여부와 상관없이 로딩 종료
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    const hasUser = !!auth?.currentUser;

    if (token && !hasUser) return;

    checkProfileFromServer();
  }, [auth?.currentUser]);

  return (
    <ProfileContext.Provider
      value={{ isProfileExist, profileData, isLoading, checkProfileFromServer }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
