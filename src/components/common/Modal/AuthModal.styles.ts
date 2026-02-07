import styled from 'styled-components';

export const OverlayStyles = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalStyles = styled.div`
  width: 540px;
  height: 250px;
  background: #ffffff;
  border-radius: 12px;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MessageStyles = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  color: #333236;
  text-align: center;
`;

export const ButtonWrapperStyles = styled.div`
  position: absolute;
  right: 45px;
  bottom: 38px;
`;

export const ButtonStyles = styled.button`
  width: 120px;
  height: 48px;
  border-radius: 8px;
  background: #ea3c12;

  font-weight: 500;
  font-size: 16px;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;
