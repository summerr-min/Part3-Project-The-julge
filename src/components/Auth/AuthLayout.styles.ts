import styled from 'styled-components';

const mobile = `@media (max-width: 743px)`;

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
  ${({ theme }) => theme.fonts.body1Regular};
  color: ${({ theme }) => theme.colors.black};
`;

export const InputStyles = styled.input<{ $error?: boolean }>`
  width: 100%;
  height: 58px;
  border-radius: 6px;
  padding: 16px 20px;
  box-sizing: border-box;

  border: 1px solid
    ${({ theme, $error }) => ($error ? theme.colors.red40 : theme.colors.gray30)};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};

  transition: border-color 0.15s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme, $error }) =>
      $error ? theme.colors.red40 : theme.colors.black};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray40};
    font-size: 16px;
  }
`;

export const ErrorTextStyles = styled.p`
  margin-top: 8px;
  width: 152px;
  height: 16px;

  ${({ theme }) => theme.fonts.caption};
  text-align: center;
  color: ${({ theme }) => theme.colors.red40};
`;

export const FooterStyles = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  ${({ theme }) => theme.fonts.body1Regular};
  color: ${({ theme }) => theme.colors.black};

  a {
    color: inherit;
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
  padding: 13px 41px;

  border: 1px solid
    ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.gray30)};
  background: ${({ theme }) => theme.colors.white};

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;

  ${({ theme }) => theme.fonts.body2Regular};
  color: ${({ theme }) => theme.colors.black};
`;

export const IconStyles = styled.span<{ $active: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 20px;

  border: 2px solid
    ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.gray30)};
  background: ${({ theme, $active }) => ($active ? theme.colors.primary : 'transparent')};

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

  ${mobile} {
    svg {
      width: 208px;
      height: 38px;
    }
  }
`;

export const ButtonRowStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;