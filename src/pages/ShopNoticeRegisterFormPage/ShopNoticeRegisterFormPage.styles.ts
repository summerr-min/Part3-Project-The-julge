import styled from 'styled-components';

const desktop = `@media (max-width: 930px)`;
const tablet = `@media (max-width: 744px)`;
const mobile = `@media (max-width: 375px)`;

// --- 내 가게 섹션 ---
export const MyShopNotice = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 60px 0;
  display: flex;
  min-height: calc(100vh - 186px);
  background: ${({ theme }) => theme.colors.gray5};

  ${desktop} {
    padding: 60px 30px;
  }

  ${tablet} {
    padding: 60px 32px;
    margin: 0 auto 0;
  }

  ${mobile} {
    padding: 40px 12px;
    margin: 0 auto 0;
  }
`;

export const MyShopNotFound = styled(MyShopNotice)`
  min-height: 81vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyShopNoticeContainer = styled.div`
  max-width: 964px;
  margin: 0px auto;
  flex: 1;
`;

export const MainTitle = styled.h1`
  position: relative;
  ${({ theme }) => theme.fonts.h1}
  .close-icon {
    position: absolute;
    right: 0;
    top: 5px;
  }
`;

export const MyShopNoticeRegisterForm = styled.form`
  /* height: 869; */
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

export const MyShopFormFieldWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px 20px;

  ${desktop} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const MyShopFormField = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 50%; */
  ${mobile} {
    grid-column: span 2;
  }
`;

export const MyShopFormLabel = styled.label`
  ${({ theme }) => theme.fonts.body1Regular}
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 8px;
`;

export const MyShopFormLabelDiv = styled.div`
  ${({ theme }) => theme.fonts.body1Regular}
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 8px;
`;

export const MyShopFormInput = styled.input`
  width: 100%;
  min-height: 58px;
  gap: 10px;
  padding: 16px 20px;
  border-radius: 6px;
  ${({ theme }) => theme.fonts.body1Regular};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray30};
`;

export const MyShopFormUnitInputWrap = styled.div`
  position: relative;

  input {
    padding-right: 50px;
  }
`;

export const InputUnit = styled.div`
  position: absolute;
  right: 20px;
  top: 16px;
  ${({ theme }) => theme.fonts.body1Regular};
`;

export const MyShopFormWrap = styled.div`
  grid-column: 1;
`;

export const MyShopFormImgLabel = styled.label`
  position: relative;
  width: 100%;
  height: 276px;
  border-radius: 12px;

  background: ${({ theme }) => theme.colors.gray10};
  border: 1px solid ${({ theme }) => theme.colors.gray30};

  /* padding: 16px 20px; */

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 11px;
  }

  p {
    ${({ theme }) => theme.fonts.body1Regular}
    color: ${({ theme }) => theme.colors.gray40};
  }
`;

export const MyShopFormImgInput = styled.input`
  display: none;
`;

export const MyShopFormTextBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${MyShopFormLabel} {
    align-self: flex-start;
    margin-top: 24px;
  }

  button {
    max-width: 312px;
    height: 48px;
    margin-top: 32px;
  }
`;

export const MyShopFormTextArea = styled.textarea`
  width: 100%;
  min-height: 153px;
  padding: 16px 20px;
  border-radius: 6px;
  ${({ theme }) => theme.fonts.body1Regular};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray30};
`;
