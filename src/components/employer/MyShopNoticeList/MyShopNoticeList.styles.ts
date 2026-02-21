import styled, { css, keyframes } from 'styled-components';

const desktop = `@media (max-width: 930px)`;
const tablet = `@media (max-width: 744px)`;
const mobile = `@media (max-width: 375px)`;

interface CardDisabledProps {
  $disabled?: boolean;
}

export const MainTitle = styled.h1`
  ${({ theme }) => theme.fonts.h1}

  ${mobile} {
    ${({ theme }) => theme.fonts.h3}
  }
`;

export const PayTitle = styled.h2`
  ${({ theme }) => theme.fonts.h2}

  ${mobile} {
    ${({ theme }) => theme.fonts.h4}
  }
`;

export const SubTitle = styled.h3`
  ${({ theme }) => theme.fonts.h3}

  ${mobile} {
    ${({ theme }) => theme.fonts.body1Bold}
    margin-bottom: 0;
  }
`;

// export const Categorytxt = styled.div`
//   ${({ theme }) => theme.fonts.body1Bold}
//   color: ${({ theme }) => theme.colors.red40};
//   margin-bottom: 8px;
// `;

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

// --- 공고 리스트 섹션 ---
export const MyShopNotice = styled.div`
  width: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  margin-top: 60px;
  // padding-bottom: 120px;
  background: ${({ theme }) => theme.colors.gray5};

  ${desktop} {
    padding: 60px 32px 0;
  }
  ${mobile} {
    padding: 40px 12px 0;
  }
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

  ${desktop} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    place-items: center;
  }

  ${mobile} {
    gap: 9px;
  }
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

  ${mobile} {
    padding: 12px;
  }

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

        ${tablet} {
          display: block;
          opacity: 0;
        }

        ${mobile} {
          display: block;
          opacity: 0;
        }
      }
    `}
`;

export const MyshopNoticeCardImgGroup = styled.div`
  position: relative;
  width: 100%;
  ${mobile} {
    max-width: 147px;
    height: 84px;
  }
`;

export const MyShopNoticeCardImg = styled.img`
  width: 100%;
  height: 160px;
  border-radius: 12px;
  object-fit: cover;
  display: block;

  ${mobile} {
    max-width: 147px;
    height: 84px;
  }
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

  ${mobile} {
    margin-top: 12px;
  }
`;

export const MyShopNoticeCardTimeGroup = styled(MyShopAddressGroup)`
  margin-top: 8px;
  p {
    ${({ theme }) => theme.fonts.body2Regular}
    color: ${({ theme }) => theme.colors.gray50};
    letter-spacing: -0.2px;

    ${mobile} {
      font-size: 12px;
    }
  }
  ${mobile} {
    margin-top: 0;
  }
`;

export const MyShopNoticeCardAddressGroup = styled(MyShopAddressGroup)`
  margin-top: 8px;
  p {
    ${({ theme }) => theme.fonts.body2Regular}
    ${mobile} {
      font-size: 12px;
    }
  }
`;

export const MyshopNoticeCardPriceGroup = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 12px;
  align-items: center;

  ${tablet} {
    flex-direction: column;
    align-items: start;
    gap: 0;
  }
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

  ${tablet} {
    margin-top: 10px;
  }

  ${mobile} {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.red40};
    font-size: 12px;
    padding: 0;
  }

  span {
    display: inline-block;
    line-height: 28px;

    /* margin-top: 10px; */
  }

  ${mobile} {
    & [fill] {
      fill: ${({ theme }) => theme.colors.red40} !important;
    }
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
    ${mobile} {
      ${({ theme }) => theme.fonts.body2Regular}
    }
  }

  a {
    width: 100%;
    max-width: 346px;
    height: 47px;
    ${mobile} {
      padding: 9.5px 13.5px;
      width: 108px;
      height: 37px;
      ${({ theme }) => theme.fonts.body2Bold}
    }
  }
`;

export const WageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.4rem;

  @media (min-width: 768px) {
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    align-items: center;
    justify-content: space-between;
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

// export const FullPageWrapper = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: rgba(255, 255, 255, 0.8);
//   z-index: 9999;
// `;
