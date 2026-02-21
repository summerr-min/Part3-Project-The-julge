import styled, { css, keyframes } from 'styled-components';

const desktop = `@media (max-width: 930px)`;
const tablet = `@media (max-width: 744px)`;
const mobile = `@media (max-width: 375px)`;

interface StatusTagProps {
  $status?: string;
}

export const MainTitle = styled.h1`
  ${({ theme }) => theme.fonts.h1}
  position: relative;
`;

// 공고 지원 리스트
export const MyShopApplicantLists = styled.div`
  width: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  background: ${({ theme }) => theme.colors.gray5};

  ${desktop} {
    padding: 60px 30px;
  }

  ${tablet} {
    padding: 60px 32px;
    margin: 0 auto 0;
  }

  ${mobile} {
    padding: 60px 12px;
    margin: 0 auto 0;
  }
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

  ${tablet} {
    max-width: 69px;
    height: 32px;
    padding: 8px 7px;
    margin-right: 8px;
  }

  ${mobile} {
    padding: 6px 5px;
    margin-right: 4px;
  }
`;

export const AcceptButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colors.blue20};
  color: ${({ theme }) => theme.colors.blue20};

  &:hover {
    /* background-color: #0056b3; */
  }

  ${tablet} {
    max-width: 69px;
    height: 32px;
    padding: 8px 7px;
  }

  ${mobile} {
    padding: 6px 5px;
    margin-top: 5px;
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

export const MyshopNoticeNoList = styled.div`
  width: 100%;
  height: 217px;
  gap: 24px;
  padding: 60px 24px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  margin-top: 32px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    /* margin-bottom: 24px; */
    ${mobile} {
      ${({ theme }) => theme.fonts.body2Regular}
    }
  }

  a {
    width: 100%;
    max-width: 346px;
    height: 47px;
    ${mobile} {
      padding: 9.5px 13.5px;
      width: 164px;
      height: 37px;
      ${({ theme }) => theme.fonts.body2Bold}
    }
  }
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
