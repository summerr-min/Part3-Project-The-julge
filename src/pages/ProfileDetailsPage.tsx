import { useContext } from 'react';
import { ProfileContext } from '@/contexts/ProfileContext';
import { useNavigate } from 'react-router-dom';
import * as S from '@/pages/ProfilePage.style';
import * as D from '@/pages/ProfileDetailsPage.style';
// 아이콘
import PhoneOverlayIcon from '@/assets/icons/user_phone_overlay_icon.svg?react';
import PhoneIcon from '@/assets/icons/user_phone_icon.svg?react';
import LocationIcon from '@/assets/icons/user_location_icon.svg?react';

function ProfileDetailsPage() {
  const profile = useContext(ProfileContext);
  const navigate = useNavigate();
  const data = profile?.profileData;

  return (
    <D.DetailPageWrapper>
      <D.UpperSection>
        <D.ProfileHeaderWrapper>
          <S.Title>내 프로필</S.Title>

          <D.ProfileCard>
            <D.InfoSection>
              <D.EditButton onClick={() => navigate('/profile/edit')}>
                편집하기
              </D.EditButton>

              <D.Label>이름</D.Label>
              <D.Name>{data?.name}</D.Name>

              {data?.phone && (
                <D.DetailRow>
                  <D.IconWrapper>
                    <PhoneIcon />
                    <PhoneOverlayIcon />
                  </D.IconWrapper>
                  {data.phone}
                </D.DetailRow>
              )}

              <D.DetailRow>
                <LocationIcon />
                선호 지역: {data?.address || '선택된 지역이 없습니다.'}
              </D.DetailRow>

              <D.Bio $hasData={!!data?.bio}>
                {data?.bio || '입력된 소개글이 없습니다.'}
              </D.Bio>
            </D.InfoSection>
          </D.ProfileCard>
        </D.ProfileHeaderWrapper>
      </D.UpperSection>
      {/* 신청 내역 섹션 */}
      <D.HistorySection>
        <S.Title>신청 내역</S.Title>
        <D.DetailsEmptyCard>
          <p>아직 신청 내역이 없어요.</p>
          <S.SubmitButton onClick={() => navigate('/')}>
            공고 보러가기
          </S.SubmitButton>
        </D.DetailsEmptyCard>
      </D.HistorySection>
    </D.DetailPageWrapper>
  );
}

export default ProfileDetailsPage;
