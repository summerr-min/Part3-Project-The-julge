import { useNavigate } from 'react-router-dom';
import * as S from '@/pages/ProfilePage.style';

function ProfilePage() {
  const navigate = useNavigate();

  return (
    <S.PageContainer>
      <S.Title>내 프로필</S.Title>
      <S.EmptyCard>
        <p>내 프로필을 등록하고 원하는 가게에 지원해 보세요.</p>
        <S.SubmitButton onClick={() => navigate('/profile/edit')}>
          내 프로필 등록하기
        </S.SubmitButton>
      </S.EmptyCard>
    </S.PageContainer>
  );
}

export default ProfilePage;
