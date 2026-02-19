import { ResetButton, ConfirmButton, Wrapper } from './Button.styles';

interface Props {
  onReset: () => void;
  onClose: () => void;
  onClick: () => void;
}

function Button({ onReset, onClose, onClick }: Props) {
  const handleReset = () => {
    if (onReset) {
      onReset();
    }

    if (onClose) {
      onClose();
    }
  };

  const handleConfirm = () => {
    if (onClose) {
      onClick();
      onClose();
    }
  };

  return (
    <Wrapper>
      <ResetButton type="button" onClick={handleReset}>
        초기화
      </ResetButton>
      <ConfirmButton type="button" onClick={handleConfirm}>
        적용하기
      </ConfirmButton>
    </Wrapper>
  );
}

export default Button;
