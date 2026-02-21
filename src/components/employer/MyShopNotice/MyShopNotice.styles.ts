import styled from 'styled-components';

// interface StatusTagProps {
//   $status?: string;
// }

const desktop = `@media (max-width: 930px)`;
const tablet = `@media (max-width: 744px)`;
const mobile = `@media (max-width: 375px)`;

// --- 내 가게 섹션 ---
export const MyShopNoticeInfo = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 60px;
  padding-bottom: 60px;
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

export const MyShopNotFound = styled(MyShopNoticeInfo)`
  min-height: 81vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainTitleWrap = styled.div`
  max-width: 964px;
  margin: 0px auto;
`;

export const MainTitle = styled.h1`
  ${({ theme }) => theme.fonts.h1}
`;

export const Categorytxt = styled.div`
  ${({ theme }) => theme.fonts.body1Bold}
  color: ${({ theme }) => theme.colors.red40};
  margin-bottom: 8px;
`;

export const MyShopContainer = styled.div`
  max-width: 964px;
  max-height: 356px;
  border-radius: 12px;
  display: flex;
  padding: 24px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  margin: 24px auto;

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
    width: 100%;
    max-width: 632px;
    height: 360px;
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

export const MyShopPayWrap = styled.div`
  display: flex;
`;

export const MyshopNoticeCardPriceGapTxt = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.red40};
  height: 30px;
  border-radius: 20px;
  padding: 0 10px;
  gap: 2px;
  margin-left: 8px;
  ${({ theme }) => theme.fonts.body2Bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 0;

  span {
    display: inline-block;
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

export const MyShopNoticeCardTimeGroup = styled(MyShopAddressGroup)`
  margin-top: 12px;
  p {
    ${({ theme }) => theme.fonts.body2Regular}
    color: ${({ theme }) => theme.colors.gray50};
  }
`;

export const MyShopInfoTxt = styled.div`
  ${({ theme }) => theme.fonts.body1Regular}
  color: ${({ theme }) => theme.colors.black};
  margin-top: 12px;
  margin-bottom: 14px;
  height: 78px;
  overflow-y: auto;
  word-break: break-all;
`;

export const MyShopNoticeDescription = styled.div`
  max-width: 964px;
  padding: 32px;
  margin: 0 auto;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.gray10};

  span {
    ${({ theme }) => theme.fonts.body1Bold}
    vertical-align: middle;
  }
  p {
    ${({ theme }) => theme.fonts.body1Regular}
    vertical-align: middle;
    margin-top: 12px;
  }
`;
