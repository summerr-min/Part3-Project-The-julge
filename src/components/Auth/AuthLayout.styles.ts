import styled from 'styled-components';

export const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const FieldStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LabelStyles = styled.label`
  font-size: 16px;
  font-weight: 400;
  color: #111322;
`;

export const InputStyles = styled.input<{ $error?: boolean }>`
  width: 100%;
  height: 58px;
  border-radius: 6px;
  padding: 16px 20px;
  box-sizing: border-box;

  border: 1px solid ${({ $error }) => ($error ? '#ff4040' : '#c8c9cf')};

  &:focus {
    outline: none;
    border-color: ${({ $error }) => ($error ? '#ff4040' : '#111322')};
  }

  &::placeholder {
    color: #a4a1aa;
    font-size: 16px;
  }
`;

export const ErrorTextStyles = styled.p`
  margin-top: 8px;
  width: 152px;
  height: 16px;

  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  text-align: center;

  color: #ff4040;
`;

export const PrimaryButtonStyles = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 6px;
  padding: 14px 136px;
  background: #ea3c12;
  color: white;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    background: #a4a1aa;
    cursor: not-allowed;
  }
`;

export const FooterStyles = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  font-size: 16px;

  a {
    text-decoration: underline;
    text-decoration-style: solid;
  }
`;

export const ToggleWrapStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ToggleRowStyles = styled.div`
  display: flex;
  gap: 9px;
`;

export const ToggleButtonStyles = styled.button<{ $active: boolean }>`
  width: 167px;
  height: 50px;
  border-radius: 30px;
  border: 1px solid ${({ $active }) => ($active ? '#ea3c12' : '#c8c9cf')};
  padding: 13px 41px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;

  font-size: 14px;
  color: #111322;
`;

export const IconStyles = styled.span<{ $active: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 20px;

  border: 2px solid ${({ $active }) => ($active ? '#ea3c12' : '#d9d9d9')};
  background: ${({ $active }) => ($active ? '#ea3c12' : 'transparent')};

  svg {
    width: 12px;
    height: 12px;
  }
`;

export const PageStyles = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const CardStyles = styled.div`
  width: 100%;
  max-width: 350px;
  height: 515px;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const LogoAreaStyles = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;

  svg {
    width: 248px;
    height: 45px;
  }

  /* 모바일 */
  @media (max-width: 743px) {
    svg {
      width: 208px;
      height: 38px;
    }
  }
`;
