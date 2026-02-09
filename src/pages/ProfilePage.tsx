import { useNavigate } from 'react-router-dom';
import * as S from '@/pages/ProfilePage.style';
import { useEffect, useState } from 'react';
import { isEmployee } from '@/api/user';
import Modal from '@/components/common/Modal/Modal';

function ProfilePage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isEmployee()) {
      // 사장님이 접근했을 때
      setIsModalOpen(true);
    }
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/'); // 모달 확인 버튼을 누르면 메인으로 이동 (메인 추후 변경해야함!!)
  };

  return (
    <S.PageContainer>
      <S.Title>내 프로필</S.Title>
      <S.EmptyCard>
        <p>내 프로필을 등록하고 원하는 가게에 지원해 보세요.</p>
        <S.SubmitButton onClick={() => navigate('/profile/edit')}>
          내 프로필 등록하기
        </S.SubmitButton>
      </S.EmptyCard>
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
