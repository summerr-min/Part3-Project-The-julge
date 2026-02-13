import BaseModal from './BaseModal';
import {
  ModalContainer,
  ContentWrapper,
  IconWrapper,
  Message,
  ButtonGroup,
  PrimaryButton,
} from './ModalCommon.styles';
import AlertIcon from '@/assets/icons/alert_icon.svg?react';

type AlertModalProps = {
  message: string;
  onClose: () => void;
  confirmText?: string;
};

const AlertModal = ({
  message,
  onClose,
  confirmText = '확인',
}: AlertModalProps) => {
  return (
    <BaseModal onClose={onClose}>
      <ModalContainer>
        <ContentWrapper>
          <IconWrapper>
            <AlertIcon />
          </IconWrapper>

          <Message>{message}</Message>
        </ContentWrapper>

        <ButtonGroup>
          <PrimaryButton type="button" onClick={onClose}>
            {confirmText}
          </PrimaryButton>
        </ButtonGroup>
      </ModalContainer>
    </BaseModal>
  );
};

export default AlertModal;
