import styled, { css, keyframes } from 'styled-components';

interface StatusTagProps {
  $status?: string;
}

// --- 내 가게 섹션 ---
export const MyShop = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 60px;
  padding-bottom: 60px;
  background: ${({ theme }) => theme.colors.gray5};
`;

export const MyShopNotFound = styled(MyShop)`
  min-height: 81vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainTitleWrap = styled.div`
  max-width: 964px;
  margin: 0px auto;
`;

export const MainTitle = styled.h1`
  ${({ theme }) => theme.fonts.h1}
`;

export const MyShopContainer = styled.div`
  max-width: 964px;
  max-height: 356px;
  border-radius: 12px;
  display: flex;
  padding: 24px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  margin: 24px auto;
`;

export const MyShopImg = styled.img`
  width: 100%;
  max-width: 539px;
  min-height: 308px;
  border-radius: 12px;
  object-fit: cover;
`;

export const MyShopTxtWrap = styled.div`
  width: 100%;
  max-width: 346px;
  max-height: 308px;
  padding-top: 16px;
  margin-left: 31px;
`;

export const MyShopPayWrap = styled.div`
  display: flex;
`;

export const MyshopNoticeCardPriceGapTxt = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.red40};
  height: 30px;
  border-radius: 20px;
  padding: 0 10px;
  gap: 2px;
  margin-left: 8px;
  ${({ theme }) => theme.fonts.body2Bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 0;

  span {
    display: inline-block;
  }
`;

export const MyShopAddressGroup = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  margin-top: 12px;

  .location-icon,
  .clock-icon,
  .arrowUp-icon {
    width: 20px;
    height: 20px;
  }

  p {
    ${({ theme }) => theme.fonts.body1Regular}
    color: ${({ theme }) => theme.colors.gray50};
  }
`;

export const MyShopNoticeCardTimeGroup = styled(MyShopAddressGroup)`
  margin-top: 12px;
  p {
    ${({ theme }) => theme.fonts.body2Regular}
    color: ${({ theme }) => theme.colors.gray50};
  }
`;

export const MyShopInfoTxt = styled.div`
  ${({ theme }) => theme.fonts.body1Regular}
  color: ${({ theme }) => theme.colors.black};
  margin-top: 12px;
  margin-bottom: 14px;
  height: 78px;
  overflow-y: auto;
  word-break: break-all;
`;

export const MyShopNoticeDescription = styled.div`
  max-width: 964px;
  padding: 32px;
  margin: 0 auto;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.gray10};

  span {
    ${({ theme }) => theme.fonts.body1Bold}
    vertical-align: middle;
  }
  p {
    ${({ theme }) => theme.fonts.body1Regular}
    vertical-align: middle;
    margin-top: 12px;
  }
`;

// 공고 지원 리스트
export const MyShopApplicantList = styled.div`
  width: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  background: ${({ theme }) => theme.colors.gray5};
`;

export const MyshopApplicantListContainer = styled.div`
  max-width: 964px;
  margin: 0 auto;
`;

// 지원자 목록 테이블
export const NoticeApplyListTableWrap = styled.div`
  margin: 20px auto;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.gray20};
`;

export const StyledTable = styled.table`
  width: 100%;
`;

export const Th = styled.th`
  padding: 14px 12px;
  text-align: left;
  background: ${({ theme }) => theme.colors.red10};
  ${({ theme }) => theme.fonts.body2Regular}
  color: ${({ theme }) => theme.colors.black};
  border-bottom: 0;
`;

export const Tr = styled.tr`
  ${({ theme }) => theme.fonts.body1Regular}
  color: ${({ theme }) => theme.colors.black};
`;

export const Td = styled.td`
  padding: 20px 12px;
  vertical-align: middle;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray20};

  &:last-child {
    display: flex;
    align-items: center;
  }
`;

export const EmptyTd = styled(Td)`
  height: 200px;
  text-align: center;

  &:last-child {
    display: table-cell;
    vertical-align: middle;
  }
`;

export const PageNationTd = styled(Td)`
  padding: 12px 0;
  text-align: center;
  &:last-child {
    display: table-cell;
    vertical-align: middle;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 6px;
  ${({ theme }) => theme.fonts.body2Bold}
  margin-bottom: 0;
`;

export const RejectButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colors.red40};
  color: ${({ theme }) => theme.colors.red40};
  margin-right: 12px;

  &:hover {
    /* background-color: #d5d5d5; */
  }
`;

export const AcceptButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colors.blue20};
  color: ${({ theme }) => theme.colors.blue20};

  &:hover {
    /* background-color: #0056b3; */
  }
`;

export const StatusTag = styled.span<StatusTagProps>`
  display: inline-block;
  border-radius: 20px;
  padding: 6px 10px;
  ${({ theme }) => theme.fonts.body2Bold}

  /* pending | accepted | rejected | canceled */
  ${({ $status }) =>
    $status === 'accepted' &&
    css`
      background-color: ${({ theme }) => theme.colors.blue10};
      color: ${({ theme }) => theme.colors.blue20};
    `}
  ${({ $status }) =>
    $status === 'rejected' &&
    css`
      background-color: ${({ theme }) => theme.colors.red10};
      color: ${({ theme }) => theme.colors.red40};
    `}
  ${({ $status }) =>
    $status === 'canceled' &&
    css`
      background-color: ${({ theme }) => theme.colors.yellow10};
      color: ${({ theme }) => theme.colors.yellow20};
    `}
  ${({ $status }) => $status === 'pending' && css``}
`;

// 로딩
const bounce = keyframes`
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1.0); }
`;

export const DotWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const Dot = styled.div<{ $delay: string }>`
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.red40};
  border-radius: 50%;
  animation: ${bounce} 1.4s infinite ease-in-out both;
  animation-delay: ${(props) => props.$delay};
`;

export const FullPageWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  z-index: 9999;
`;

const pulse = keyframes`
  0% { transform: scale(0.5); opacity: 1; }
  100% { transform: scale(1.5); opacity: 0; }
`;

export const PulseCircle = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.red40};
  border-radius: 50%;
  animation: ${pulse} 2s infinite ease-out;
`;

export const LoadingText = styled.p`
  margin-top: 150px;
  color: #666;
  font-size: 14px;
  font-weight: 500;
`;
