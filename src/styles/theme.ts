import { DefaultTheme } from 'styled-components';

/**
 * 프로젝트 전체에 사용하는 디자인 객체
 * @description
 * .js에서 발생하던 'any' 타입 문제를 해결하기 위해 .ts로 전환함.
 */
export const theme: DefaultTheme = {
  // 색상, 폰트 규격
  colors: {
    // Gray Scale
    black: '#111322',
    gray50: '#7D7986',
    gray40: '#A4A1AA',
    gray30: '#CBC9CF',
    gray20: '#E5E4E7',
    gray10: '#F2F2F3',
    gray5: '#FAFAFA',
    white: '#FFFFFF',

    // red
    red40: '#FF4040',
    red30: '#FF8D72',
    red20: '#FFAF9B',
    red10: '#FFEBE7',

    // blue
    blue20: '#0080FF',
    blue10: '#CCE6FF',
    // green
    green20: '#20A81E',
    green10: '#D4F7D4',

    kakao: '#FEE500',
  },
  fonts: {
    family: "'Spoqa Han Sans Neo', 'sans-serif'",
    weight: {
      bold: 700,
      medium: 500,
      regular: 400,
    },

    h1: `
      font-size: 28px;
      font-weight: 700;
      line-height: 100%;
      letter-spacing: 0.02em; /* 자간 2% */
    `,
    h2: `
      font-size: 24px;
      font-weight: 700;
      line-height: 100%;
      letter-spacing: 0.02em; /* 자간 2% */
    `,
    h3: `
      font-size: 20px;
      font-weight: 700;
      line-height: 100%;
    `,
    h4: `
      font-size: 18px;
      font-weight: 700;
      line-height: 100%;
    `,
    body1Bold: `
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      margin-bottom: 9px; /* 문단간격 */
    `,
    body1Regular: `
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
    `,
    body2Bold: `
      font-size: 14px;
      font-weight: 700;
      line-height: 100%;
      margin-bottom: 9px;
    `,
    body2Regular: `
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
    `,
    caption: ` 
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      margin-bottom: 9px; /* 문단간격 */
    `,
  },
};
