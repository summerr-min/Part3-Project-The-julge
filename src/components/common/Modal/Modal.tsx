import {
  OverlayStyles,
  ModalStyles,
  MessageStyles,
  ButtonWrapperStyles,
  ButtonStyles,
} from './Modal.styles';

type ModalProps = {
  message: string;
  onClose: () => void;
};

// 공통 알림 모달
const Modal = ({ message, onClose }: ModalProps) => {
  return (
    <OverlayStyles onClick={onClose}>
      <ModalStyles
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <MessageStyles>{message}</MessageStyles>
        <ButtonWrapperStyles>
          <ButtonStyles type="button" onClick={onClose}>
            확인
          </ButtonStyles>
        </ButtonWrapperStyles>
      </ModalStyles>
    </OverlayStyles>
  );
};

export default Modal;
