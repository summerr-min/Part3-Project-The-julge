import { useContext } from 'react';
import { ProfileContext } from '@/contexts/ProfileContext';
import * as S from '@/pages/ProfilePage.style';
import { useNavigate } from 'react-router-dom';

function ProfileDetailsPage() {
  const profile = useContext(ProfileContext);
  const navigate = useNavigate();
  const data = profile?.profileData;

  if (profile?.isLoading) {
    return (
      <S.PageContainer>
        <S.Title>내 프로필</S.Title>
        <S.EmptyCard>
          <p>프로필 정보를 불러오는 중입니다...</p>
        </S.EmptyCard>
      </S.PageContainer>
    );
  }

  if (!data) {
    return (
      <S.PageContainer>
        <S.Title>내 프로필</S.Title>
        <S.EmptyCard>
          <p>등록된 프로필 정보가 없습니다.</p>
          <S.SubmitButton onClick={() => navigate('/profile/edit')}>
            등록하러 가기
          </S.SubmitButton>
        </S.EmptyCard>
      </S.PageContainer>
    );
  }

  return (
    <S.PageContainer>
      <S.Title>내 프로필</S.Title>
      <S.EmptyCard style={{ alignItems: 'flex-start', padding: '30px' }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{data.name}</div>
        <p>연락처: {data.phone}</p>
        <p>선호지역: {data.address}</p>
        {data.bio && <p>소개: {data.bio}</p>}
      </S.EmptyCard>
    </S.PageContainer>
  );
}

export default ProfileDetailsPage;
