import styled from 'styled-components';
import { EmptyCard as SharedEmptyCard } from '@/pages/ProfilePage.style'; // 기존 컴포넌트 가져오기

export const DetailPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
/** 상단 세션 */
export const UpperSection = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 60px 238px;
`;
export const ProfileHeaderWrapper = styled.div`
  display: flex;
  lign-items: flex-start;
  margin: 0 auto;
  margin-bottom: 60px;
  width: 100%;

  > h2,
  > p {
    white-space: nowrap; /*텍스트가 줄바꿈 없이 한줄로 유지*/
    flex-shrink: 0; /*flex컨테이너에서 공간 부족해도 크기 안 줄어듬 */
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 32px;
  }

  @media (max-width: 375px) {
    gap: 24px;
    margin-top: 40px;
  }
`;

// 카드 내부
export const ProfileCard = styled.div`
  position: relative;
  background-color: #ffebe7;
  border-radius: 12px;
  width: 665px;
  min-height: 256px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  margin-left: auto;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: none;
  }

  @media (max-width: 375px) {
    padding: 24px 20px;
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

export const EditButton = styled.button`
  position: absolute;
  top: 32px;
  right: 32px;
  padding: 14px 55px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: white;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 375px) {
    top: 24px;
    right: 20px;
    padding: 8px 16px;
  }
`;

// 신청 내역 카드 스타일 정의
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

export const HistorySection = styled.div`
  margin-top: 60px;
  background-color: ${({ theme }) => theme.colors.gray5};
  padding: 60px 238px;
  min-height: 463px;

  @media (max-width: 1024px) {
  }

  @media (max-width: 375px) {
  }
`;
