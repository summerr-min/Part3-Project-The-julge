import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from 'react';
import { getMyProfile } from '@/api/user';
import { AuthContext } from '@/contexts/AuthContext';
import { getUserApplications } from '@/api/application';
import { getUserAlerts, readAlert } from '@/api/userAlert';

// Context 데이터 타입 정의
interface ProfileContextType {
  // 프로필 관련
  isProfileExist: boolean; // 프로필 등록 여부
  profileData: any;
  isLoading: boolean;
  checkProfileFromServer: () => Promise<void>; // 상태 함수

  // 지원 내역 관련 상태
  applications: any[]; // 지원 내역 목록
  totalCount: number; // 전체 지원 개수 (페이지네이션용)
  isAppLoading: boolean;
  fetchApplications: (page: number) => Promise<void>; // 데이터를 가져오는 함수

  // 알람 관련
  alerts: any[]; // 알림 목록
  unreadCount: number; // 읽지 않은 알림 개수
  isAlertLoading: boolean;
  fetchAlerts: () => Promise<void>; // 알림 목록 가져오기
  markAsRead: (alertId: string) => Promise<void>; // 알림 읽음 처리
}

export const ProfileContext = createContext<ProfileContextType | undefined>(
  undefined
);

export function ProfileStorage({ children }: { children: ReactNode }) {
  const auth = useContext(AuthContext);
  const [isProfileExist, setIsProfileExist] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // 공고 지원 내역 데이터 상태
  const [applications, setApplications] = useState<any[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isAppLoading, setIsAppLoading] = useState(false);

  // 알림 상태
  const [alerts, setAlerts] = useState<any[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isAlertLoading, setIsAlertLoading] = useState(false);

  const LIMIT = 5;

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

  const fetchApplications = useCallback(
    async (page: number) => {
      const userId = auth?.currentUser?.id || localStorage.getItem('userId');
      if (!userId) return;
      try {
        setIsAppLoading(true);
        // 한페이지 5개
        const offset = (page - 1) * LIMIT;

        // API 호출
        const response = await getUserApplications(userId, offset, LIMIT);
        // 명세서 구조 - response 안에 items목록 count전체개수 있음
        setApplications(response.items);
        setTotalCount(response.count);
      } catch (error) {
        console.error('지원 내역 로드 실패:', error);
      } finally {
        setIsAppLoading(false);
      }
    },
    [auth?.currentUser?.id]
  ); // 유저 id가 바뀔때만 함수 재생성

  // 알림 API 연동
  const fetchAlerts = useCallback(async () => {
    const userId = auth?.currentUser?.id || localStorage.getItem('userId');
    if (!userId) return;

    try {
      setIsAlertLoading(true);
      const response = await getUserAlerts(userId, 0, 10);
      setAlerts(response.items);

      // 읽지 않은 알림(read: false) 개수 계산
      const unread = response.items.filter(
        (item: any) => !item.item.read
      ).length;
      setUnreadCount(unread);
    } catch (error) {
      console.error('알림 로드 실패:', error);
    } finally {
      setIsAlertLoading(false);
    }
  }, [auth?.currentUser?.id]);

  const markAsRead = async (alertId: string) => {
    const userId = auth?.currentUser?.id || localStorage.getItem('userId');
    if (!userId) return;

    try {
      await readAlert(userId, alertId); // API 호출
      await fetchAlerts(); // 목록 새로고침 개수/상태 동기화
    } catch (error) {
      console.error('읽음 처리 실패:', error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token && !auth?.currentUser) return;

    checkProfileFromServer();
    fetchAlerts(); // 초기 로드 시 알림도 가져옴
  }, [auth?.currentUser, fetchAlerts]);

  return (
    <ProfileContext.Provider
      value={{
        isProfileExist,
        profileData,
        isLoading,
        checkProfileFromServer,
        applications,
        totalCount,
        isAppLoading,
        fetchApplications,
        // 알림 값 전달
        alerts,
        unreadCount,
        isAlertLoading,
        fetchAlerts,
        markAsRead,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
