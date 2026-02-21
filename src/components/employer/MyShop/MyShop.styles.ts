import styled, { css } from 'styled-components';

const desktop = `@media (max-width: 930px)`;
const tablet = `@media (max-width: 744px)`;
const mobile = `@media (max-width: 375px)`;

interface ButtonShopProps {
  $variant?: 'primary' | 'outline';
}

// --- 내 가게 섹션 ---
export const MyShopInfo = styled.div`
  width: 100%;
  max-width: 964px;

  margin: 60px auto 0;

  ${desktop} {
    padding: 0 30px;
  }

  ${tablet} {
    padding: 0 32px;
    margin: 60px auto 0;
  }

  ${mobile} {
    padding: 0 12px;
  }
`;

export const MainTitle = styled.h1`
  ${({ theme }) => theme.fonts.h1}

  ${mobile} {
    ${({ theme }) => theme.fonts.h3}
  }
`;

export const PayTitle = styled.h2`
  ${({ theme }) => theme.fonts.h2}
`;

export const SubTitle = styled.h3`
  ${({ theme }) => theme.fonts.h3}
`;

export const Categorytxt = styled.div`
  ${({ theme }) => theme.fonts.body1Bold}
  color: ${({ theme }) => theme.colors.red40};
  margin-bottom: 8px;
`;

export const MyShopNotFound = styled(MyShopInfo)`
  min-height: 81vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyShopContainer = styled.div`
  width: 100%;
  max-height: 356px;
  border-radius: 12px;
  display: flex;
  padding: 24px;
  background: ${({ theme }) => theme.colors.red10};
  margin-top: 24px;

  ${desktop} {
    display: flex;
    flex-direction: column;
    max-height: 735px;
  }

  ${tablet} {
    display: flex;
    flex-direction: column;
  }

  ${mobile} {
    padding: 20px;
  }
`;

export const MyShopImg = styled.img`
  width: 100%;
  max-width: 539px;
  min-height: 308px;
  border-radius: 12px;
  object-fit: cover;

  ${desktop} {
    max-width: none;
  }

  ${tablet} {
    max-width: none;
  }

  ${mobile} {
    width: 100%;
    max-width: 311px;
    height: 177px;

    min-height: initial;
  }
`;

export const MyShopTxtWrap = styled.div`
  width: 100%;
  max-width: 346px;
  max-height: 308px;
  padding-top: 16px;
  margin-left: 31px;

  ${desktop} {
    margin-left: 0;
    max-width: none;
  }
`;

export const MyShopAddressGroup = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  margin-top: 12px;

  .location-icon,
  .clock-icon,
  .arrowUp-icon {
    width: 20px;
    height: 20px;
  }

  p {
    ${({ theme }) => theme.fonts.body1Regular}
    color: ${({ theme }) => theme.colors.gray50};
  }
`;

export const MyShopInfoTxt = styled.div`
  ${({ theme }) => theme.fonts.body1Regular}
  color: ${({ theme }) => theme.colors.black};
  margin-top: 12px;
  margin-bottom: 34px;
  height: 98px;
  overflow-y: auto;
  word-break: break-all;
`;

export const MyShopButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const StyledShopButton = styled.button<ButtonShopProps>`
  width: 100%;
  padding: 14px;
  border-radius: 6px;
  text-align: center;
  ${({ theme }) => theme.fonts.body1Bold}

  ${({ $variant, theme }) =>
    $variant === 'outline'
      ? css`
          background: ${theme.colors.white};
          border: 1px solid ${theme.colors.red40};
          color: ${theme.colors.red40};
        `
      : css`
          background: ${theme.colors.red40};
          color: ${theme.colors.white};
          border: none;
        `};
`;
