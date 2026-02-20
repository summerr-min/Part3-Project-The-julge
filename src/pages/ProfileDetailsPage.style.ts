import styled from 'styled-components';
import Button from '@/components/common/Button/Button';
import { EmptyCard as SharedEmptyCard } from '@/pages/ProfilePage.style'; // 기존 컴포넌트 가져오기
import { breakpoints } from '@/pages/profileCommom.style';
import * as T from '@/components/common/Table/Table.styles';

export const DetailPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
/** 상단 세션 */
export const UpperSection = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 60px 238px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 60px 32px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 40px 12px;
  }
`;

export const ProfileHeaderWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
  width: 100%;

  > h2,
  > p {
    white-space: nowrap; /*텍스트가 줄바꿈 없이 한줄로 유지*/
    flex-shrink: 0; /*flex컨테이너에서 공간 부족해도 크기 안 줄어듬 */
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 16px;
    margin-bottom: 0;
  }
`;

// 카드 내부
export const ProfileCard = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.red10};
  border-radius: 12px;
  width: 665px;
  margin-left: 180px;
  min-height: 256px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.tablet}) {
    width: 680px;
    margin-left: 0;
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 24px 20px;
    width: 351px;
    margin: 0 auto;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.fonts.body1Bold};
  margin-bottom: 8px;
`;

// 큰 이름 텍스트
export const Name = styled.h3`
  ${({ theme }) => theme.fonts.h1};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 12px;
`;

export const IconWrapper = styled.div`
  position: relative;
  /* 외부 주황색 박스 */
  width: 14px;
  height: 20px;
  display: flex;
  flex-shrink: 0;

  /* 외부 아이콘 (주황색 박스) */
  svg:last-child {
    width: 14px;
    height: 20px;
    border-radius: 2px;
  }

  /* 내부 아이콘 (흰색 박스) */
  svg:first-child {
    position: absolute;
    width: 10px;
    height: 14px;
    top: 3px;
    left: 2px;
    border-radius: 2px;
    z-index: 1;
  }
`;
export const DetailRow = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray50};
  ${({ theme }) => theme.fonts.body1Regular};
  gap: 6px;
  margin-bottom: 12px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Bio = styled.p<{ $hasData: boolean }>`
  margin-top: 20px;
  ${({ theme }) => theme.fonts.body1Regular};
  color: ${({ $hasData, theme }) =>
    $hasData ? theme.colors.black : theme.colors.gray50};
`;

// 편집하기 버튼 (공통 버튼 outline )
export const EditButton = styled(Button)`
  width: fit-content;
  position: absolute;
  top: 32px;
  right: 32px;
  padding: 14px 55px;
  ${({ theme }) => theme.fonts.body1Bold};

  @media (max-width: ${breakpoints.mobile}) {
    top: 24px;
    right: 20px;
    width: 108px;
    height: 37px;
    padding: 10px 20px;
  }
`;

// 공고 보러가기 버튼 (공통 Button)
export const ActionButton = styled(Button)`
  width: fit-content;
  padding: 13.5px 110.5px;

  @media (max-width: ${breakpoints.mobile}) {
    width: 110px;
    height: 37px;
    padding: 10px 13.5px;
    ${({ theme }) => theme.fonts.body2Bold};
  }
`;

export const HistorySection = styled.div`
  margin-top: 60px;
  background-color: ${({ theme }) => theme.colors.gray5};
  padding: 60px 0; /* 좌우 패딩 제거 */
  width: 100%;
  min-height: 463px;
`;

export const HistoryContent = styled.div`
  max-width: 964px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 32px;
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 12px;
    margin: 0 auto;
  }
`;

export const DetailsEmptyCard = styled(SharedEmptyCard)`
  width: 100%;
  max-width: 964px;
  margin: 0 auto;

  padding: 60px 24px;
  background-color: ${({ theme }) => theme.colors.gray5};
  border: 1px solid ${({ theme }) => theme.colors.gray20};

  p {
    margin-bottom: 24px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;
/** 테이블 스타일 */
export const TableWrapper = styled.div`
  width: 100%;
  max-width: 966px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  border-radius: 10px;
  overflow: hidden;
  margin-top: 32px;
`;

export const Thead = styled(T.TheadStyles)``;
export const Table = styled(T.TableStyles)``;

export const Th = styled(T.ThStyles)`
  // 각 헤더 열의 너비 지정
  &:nth-of-type(1) {
    width: 228px;
  } // 가게
  &:nth-of-type(2) {
    width: 300px;
  } // 일자
  &:nth-of-type(3) {
    width: 200px;
  } // 시급
  &:nth-of-type(4) {
    width: 238px;
  } // 상태
`;

export const Td = styled(T.TdStyles)`
  height: 64px;
  max-height: 64px; /* 높이 고정 */
  padding: 12px;
  vertical-align: middle;
  /* 글자가 길어도 행 높이가 늘어나지 않게 설정 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StatusTd = styled(T.StatusTdStyles)`
  height: 64px;
  max-height: 64px;
  padding: 12px;
  vertical-align: middle;
  box-sizing: border-box;
`;

export const PaginationWrapper = styled(T.PaginationWrapperStyles)`
  justify-content: center;
`;

/** 상태별 배지 스타일*/
export const StatusBadge = styled.span<{ $status: string }>`
  padding: 6px 10px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 400;

  ${({ $status, theme }) => {
    switch ($status) {
      case 'accepted':
        return `color: #0080ff; background: #CCE6FF;`; // 승인됨
      case 'rejected':
        return `color: #ff4d4d; background: #FFEBE7;`; // 거절됨
      case 'canceled':
        return `color: ${theme.colors.gray40}; background: ${theme.colors.gray10};`; // 취소
      default:
        return `color: #20A81E; background: #D4F7D4;`; // 대기중
    }
  }}
`;
