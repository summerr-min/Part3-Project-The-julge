import { useNavigate } from 'react-router-dom';
import * as S from '@/pages/ProfilePage.style';
import { useEffect, useState, useContext } from 'react';
import Modal from '@/components/common/Modal/Modal';
import { AuthContext } from '@/contexts/AuthContext';
import { ProfileContext } from '@/contexts/ProfileContext';

function ProfilePage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const auth = useContext(AuthContext);
  const profile = useContext(ProfileContext);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    // 로그인 여부 확인
    if (!token) {
      navigate('/login');
      return;
    }

    // 인증/프로필 데이터 로딩 중이면 대기
    if (profile?.isLoading) return;

    //사장님이면 접근 차단
    const isEmployer =
      auth?.currentUser?.type === 'employer' ||
      localStorage.getItem('userType') === 'employer';
    if (isEmployer) {
      setIsModalOpen(true);
      return;
    }

    //프로필 && 상세 페이지로 이동
    if (profile?.isProfileExist) {
      navigate('/profile/details');
      return;
    }

    //프로필 없는 알바생인 경우
  }, [
    auth?.currentUser,
    profile?.isProfileExist,
    profile?.isLoading,
    navigate,
  ]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/'); // 메인으로 이동 (추후 경로 변경해야함!!)
  };

  if (profile?.isLoading) return null;
  return (
    <S.PageContainer>
      <S.Title>내 프로필</S.Title>
      {!profile?.isProfileExist && (
        <S.EmptyCard>
          <p>내 프로필을 등록하고 원하는 가게에 지원해 보세요.</p>
          <S.SubmitButton onClick={() => navigate('/profile/edit')}>
            내 프로필 등록하기
          </S.SubmitButton>
        </S.EmptyCard>
      )}
      {isModalOpen && (
        <Modal
          message="알바님 전용 페이지 입니다. 사장님은 접근하실 수 없습니다."
          onClose={handleCloseModal}
        />
      )}
    </S.PageContainer>
  );
}

export default ProfilePage;
