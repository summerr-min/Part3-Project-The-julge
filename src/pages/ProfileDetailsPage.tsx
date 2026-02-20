import { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '@/contexts/ProfileContext';
import { useNavigate } from 'react-router-dom';
import * as S from '@/pages/ProfilePage.style';
import * as D from '@/pages/ProfileDetailsPage.style';
import Table, { TableHeader } from '@/components/common/Table/Table';
import { formatWorkDate } from '@/utils/userDate';

// 아이콘
import PhoneOverlayIcon from '@/assets/icons/user_phone_overlay_icon.svg?react';
import PhoneIcon from '@/assets/icons/user_phone_icon.svg?react';
import LocationIcon from '@/assets/icons/user_location_icon.svg?react';

function ProfileDetailsPage() {
  const navigate = useNavigate();
  const profile = useContext(ProfileContext);

  // 페이지 네이션 상태관리
  const [currentPage, setCurrentPage] = useState(1);
  const LIMIT = 5;
  useEffect(() => {
    if (profile?.fetchApplications) {
      profile.fetchApplications(currentPage);
    }
  }, [currentPage, profile?.fetchApplications]);

  // profile 안의 변수
  const data = profile?.profileData;
  const applications = profile?.applications || []; // 지원 내역 목록
  const totalCount = profile?.totalCount || 0; // 전체 데이터 개수
  const isAppLoading = profile?.isAppLoading;

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(totalCount / LIMIT);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  //테이블 헤더 정의
  const TABLE_HEADERS: TableHeader[] = [
    { key: 'shop', label: '가게' },
    { key: 'date', label: '일자' },
    { key: 'pay', label: '시급' },
    { key: 'status', label: '상태' },
  ];

  // 왼쪽 영역 데이터 (가게, 일자, 시급)
  const leftRows = applications.map((app) => {
    const { startsAt, workhour } = app.item.notice.item;

    return (
      <tr key={`left-${app.item.id}`}>
        <D.Td>{app.item.shop.item.name}</D.Td>
        <D.Td>{formatWorkDate(startsAt, workhour)}</D.Td>
        <D.Td>{app.item.notice.item.hourlyPay.toLocaleString()}원</D.Td>
      </tr>
    );
  });
  //오른쪽 고정 영역 데이터
  const rightRows = applications.map((app) => (
    <tr key={`right-${app.item.id}`}>
      <D.StatusTd>
        <D.StatusBadge $status={app.item.status}>
          {app.item.status === 'pending' && '대기중'}
          {app.item.status === 'accepted' && '승인 완료'}
          {app.item.status === 'rejected' && '거절'}
          {app.item.status === 'canceled' && '취소'}
        </D.StatusBadge>
      </D.StatusTd>
    </tr>
  ));

  return (
    <D.DetailPageWrapper>
      <D.UpperSection>
        <D.ProfileHeaderWrapper>
          <S.Title>내 프로필</S.Title>

          <D.ProfileCard>
            <D.InfoSection>
              <D.EditButton
                preset="default"
                variant="outline"
                onClick={() => navigate('/profile/edit')}
              >
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
        <D.HistoryContent>
          <S.Title>신청 내역</S.Title>

          {isAppLoading ? (
            <p>데이터를 가져오고 있어요...</p>
          ) : applications.length === 0 ? (
            <D.DetailsEmptyCard>
              <p>아직 신청 내역이 없어요.</p>
              <D.ActionButton
                preset="default"
                variant="primary"
                onClick={() => navigate('/')} /*추후 경로 변경해야함. */
              >
                공고 보러가기
              </D.ActionButton>
            </D.DetailsEmptyCard>
          ) : (
            <Table
              headers={TABLE_HEADERS}
              leftChildren={leftRows}
              rightChildren={rightRows}
              dataLength={applications.length}
              fixedRowCount={5}
              totalPages={totalPages}
              currentPage={currentPage} // 현재 페이지 상태 전달
              onChangePage={handlePageChange} // 페이지 변경 함수
            />
          )}
        </D.HistoryContent>
      </D.HistorySection>
    </D.DetailPageWrapper>
  );
}

export default ProfileDetailsPage;
