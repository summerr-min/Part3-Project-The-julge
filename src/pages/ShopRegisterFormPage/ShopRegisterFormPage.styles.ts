import styled from 'styled-components';
import CameraIcon from '@/assets/icons/icon_camera.svg?react';

const tablet = `@media (max-width: 744px)`;
const mobile = `@media (max-width: 375px)`;

// --- 내 가게 섹션 ---
export const MyShop = styled.div`
  width: 100%;
  max-width: 964px;

  padding: 60px 30px;
  margin: 0 auto 60px;

  ${tablet} {
    padding: 60px 32px;
    margin: 0 auto 60px;
  }

  ${mobile} {
    padding: 40px 32px;
    margin: 0 auto 60px;
  }
`;

export const MyShopNotFound = styled(MyShop)`
  min-height: 81vh;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const MyShopRegisterForm = styled.form`
  /* height: 869; */
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

export const MyShopFormFieldWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px 20px;

  grid-auto-rows: min-content;
  align-items: start;
`;

export const MyShopFormField = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  &:focus-within {
    z-index: 10;
  }

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

  ${tablet} {
    grid-column: span 2;
  }
`;

export const StyledCameraIcon = styled(CameraIcon)`
  width: 32px;
  height: 32px;

  /* path {
    fill: ${({ theme }) => theme.colors.white};
  } */

  /* z-index: 1; */
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

  .dimmed {
    position: absolute;
    width: 100%;
    height: 100%;
    ${StyledCameraIcon} {
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
      z-index: 1;
    }
    p {
      z-index: 1;
      color: ${({ theme }) => theme.colors.white};
    }
    .bgDim {
      position: absolute;
      background: ${({ theme }) => theme.colors.black};
      opacity: 0.7;
      width: 100%;
      height: 100%;
    }
  }

  ${StyledCameraIcon} {
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
