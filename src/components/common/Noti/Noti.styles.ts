import styled from 'styled-components';

const mobile = `@media (max-width: 743px)`;

export const PanelStyles = styled.div`
  position: absolute;
  top: 40px;
  right: 0;

  width: 368px;
  height: 419px;

  padding: 24px 20px;

  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray30};
  background: ${({ theme }) => theme.colors.red10};

  box-shadow: 0 2px 8px rgba(120, 116, 134, 0.25);
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 16px;

  flex: none;
  z-index: 1000;

  ${mobile} {
    position: fixed;
    inset: 0;

    width: 100%;
    height: 100dvh;

    border-radius: 0;
    border: 0;
    box-shadow: none;
    padding: 0;

    overflow: hidden;
    z-index: 2000;
  }
`;

export const HeaderStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile} {
    padding: 20px 16px 12px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray20};
    background: ${({ theme }) => theme.colors.red10};
  }
`;

export const TitleStyles = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.black};
`;

export const CloseButtonStyles = styled.button`
  display: none;
  width: 28px;
  height: 28px;

  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 8px;
  background: transparent;

  cursor: pointer;

  font-size: 18px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.gray50};

  ${mobile} {
    display: inline-flex;
  }
`;

export const ListStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  min-width: 0;
  overflow-y: auto;

  // 브라우저별 스크롤바 숨김 처리
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${mobile} {
    flex: 1;
    min-height: 0;
    padding: 12px 16px 20px;
  }
`;

export const ItemStyles = styled.div`
  width: 100%;
  min-width: 0;
  min-height: 105px;

  padding: 16px 12px;

  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  background: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
  gap: 4px;

  ${mobile} {
    min-height: auto;
  }
`;

export const MessageRowStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const DotStyles = styled.div<{ $status: 'approved' | 'rejected' }>`
  width: 5px;
  height: 5px;
  margin-top: 3px;
  border-radius: 50%;
  flex-shrink: 0;

  background: ${({ theme, $status }) =>
    $status === 'approved' ? theme.colors.blue20 : theme.colors.red40};
`;

export const MessageStyles = styled.p`
  margin: 0;
  min-width: 0;

  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};

  overflow-wrap: anywhere;
  word-break: keep-all;
`;

export const StatusText = styled.span<{ $status: 'approved' | 'rejected' }>`
  color: ${({ theme, $status }) =>
    $status === 'approved' ? theme.colors.blue20 : theme.colors.red40};
`;

export const TimeTextStyles = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0;

  color: ${({ theme }) => theme.colors.gray40};
`;
