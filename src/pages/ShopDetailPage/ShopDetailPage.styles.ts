import styled, { css, keyframes } from 'styled-components';

interface CardDisabledProps {
  $disabled?: boolean;
}

interface ButtonShopProps {
  $variant?: 'primary' | 'outline';
}

// --- 내 가게 섹션 ---
export const MyShop = styled.div`
  width: 100%;
  max-width: 964px;

  margin: 60px auto 0;
`;

export const MainTitle = styled.h1`
  ${({ theme }) => theme.fonts.h1}
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

export const MyShopNotFound = styled(MyShop)`
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
`;

export const MyShopImg = styled.img`
  width: 100%;
  max-width: 539px;
  min-height: 308px;
  border-radius: 12px;
  object-fit: cover;
`;

export const MyShopTxtWrap = styled.div`
  width: 100%;
  max-width: 346px;
  max-height: 308px;
  padding-top: 16px;
  margin-left: 31px;
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

// --- 공고 리스트 섹션 ---
export const MyShopNotice = styled.div`
  width: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  margin-top: 60px;
  // padding-bottom: 120px;
  background: ${({ theme }) => theme.colors.gray5};
`;

export const MyshopNoticeContainer = styled.div`
  max-width: 964px;
  margin: 0 auto;
`;

export const MyshopNoticeListWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 32px;
`;

export const MyshopNoticeCard = styled.div<CardDisabledProps>`
  max-width: 312px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  padding: 16px;
  background: ${({ theme }) => theme.colors.white};
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  ${({ $disabled, theme }) =>
    $disabled &&
    css`
      pointer-events: none;

      ${MyShopNoticeCardImg} {
        filter: grayscale(100%) brightness(0.3);
      }

      ${FinishedBadge} {
        display: block;
      }

      ${SubTitle}, ${PayTitle}, p {
        color: ${theme.colors.gray30} !important;
      }

      & [fill] {
        fill: ${theme.colors.gray20} !important;
      }

      ${MyshopNoticeCardPriceGapTxt} {
        display: none;
      }
    `}
`;

export const MyshopNoticeCardImgGroup = styled.div`
  position: relative;
`;

export const MyShopNoticeCardImg = styled.img`
  width: 100%;
  height: 160px;
  border-radius: 12px;
  object-fit: cover;
  display: block;
`;

export const FinishedBadge = styled.span`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.gray30};
  ${({ theme }) => theme.fonts.h1};
  white-space: nowrap;
  z-index: 10;
`;

export const MyshopNoticeCardTxtGroup = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MyShopNoticeCardTimeGroup = styled(MyShopAddressGroup)`
  margin-top: 8px;
  p {
    ${({ theme }) => theme.fonts.body2Regular}
    color: ${({ theme }) => theme.colors.gray50};
    letter-spacing: -0.2px;
  }
`;

export const MyShopNoticeCardAddressGroup = styled(MyShopAddressGroup)`
  margin-top: 8px;
  p {
    ${({ theme }) => theme.fonts.body2Regular}
  }
`;

export const MyshopNoticeCardPriceGroup = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const MyshopNoticeCardPriceGapTxt = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.red40};
  height: 30px;
  border-radius: 20px;
  padding: 0 10px;
  gap: 2px;
  ${({ theme }) => theme.fonts.body2Bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 0;

  span {
    display: inline-block;
  }
`;

export const MyshopNoticeNoList = styled.div`
  width: 100%;
  height: 217px;
  gap: 24px;
  padding: 60px 24px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  margin-top: 32px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    /* margin-bottom: 24px; */
  }

  a {
    width: 346px;
    height: 47px;
  }
`;

// 로딩
const bounce = keyframes`
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1.0); }
`;

export const DotWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const Dot = styled.div<{ $delay: string }>`
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.red40};
  border-radius: 50%;
  animation: ${bounce} 1.4s infinite ease-in-out both;
  animation-delay: ${(props) => props.$delay};
`;

export const FullPageWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  z-index: 9999;
`;

const pulse = keyframes`
  0% { transform: scale(0.5); opacity: 1; }
  100% { transform: scale(1.5); opacity: 0; }
`;

export const PulseCircle = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.red40};
  border-radius: 50%;
  animation: ${pulse} 2s infinite ease-out;
`;

export const LoadingText = styled.p`
  margin-top: 150px;
  color: #666;
  font-size: 14px;
  font-weight: 500;
`;
