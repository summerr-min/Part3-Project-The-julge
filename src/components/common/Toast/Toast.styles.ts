import styled from 'styled-components';

export const ToastContainer = styled.div`
  position: fixed;
  right: 24px;
  bottom: 24px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  z-index: 2000;
`;

export const ToastBox = styled.div`
  min-width: 113px;
  max-width: 200px;
  height: 46px;

  padding: 10px 16px;
  box-sizing: border-box;

  border-radius: 5px;

  background: ${({ theme }) => theme.colors.red30};
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  animation: toastIn 240ms ease-out;

  @keyframes toastIn {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ToastText = styled.p`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  line-height: 26px;

  text-align: center;
`;
