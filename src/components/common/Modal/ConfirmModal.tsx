import BaseModal from './BaseModal';
import {
  ModalContainer,
  ContentWrapper,
  IconWrapper,
  Message,
  ButtonGroup,
  OutlineButton,
  PrimaryButton,
} from './ModalCommon.styles';
import ConfirmIcon from '@/assets/icons/confirm_icon.svg?react';

type ConfirmModalProps = {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  cancelText?: string;
  confirmText?: string;
};

const ConfirmModal = ({
  message,
  onConfirm,
  onCancel,
  cancelText = '아니오',
  confirmText = '예',
}: ConfirmModalProps) => {
  return (
    <BaseModal onClose={onCancel}>
      <ModalContainer>
        <ContentWrapper>
          <IconWrapper>
            <ConfirmIcon />
          </IconWrapper>

          <Message>{message}</Message>
        </ContentWrapper>

        <ButtonGroup>
          <OutlineButton type="button" onClick={onCancel}>
            {cancelText}
          </OutlineButton>
          <PrimaryButton type="button" onClick={onConfirm}>
            {confirmText}
          </PrimaryButton>
        </ButtonGroup>
      </ModalContainer>
    </BaseModal>
  );
};

export default ConfirmModal;
