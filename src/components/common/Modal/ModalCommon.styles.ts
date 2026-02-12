import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 298px;
  height: 183px;

  padding: 16px;
  box-sizing: border-box;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 250px;
  min-height: 66px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

export const Message = styled.p`
  width: 250px;
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0;

  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const BaseButton = styled.button`
  width: 80px;
  height: 37px;

  border-radius: 6px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border: none;
  background: transparent;

  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0;

  cursor: pointer;
`;

export const OutlineButton = styled(BaseButton)`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
`;

export const PrimaryButton = styled(BaseButton)`
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;
