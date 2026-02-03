import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    // 1. 색상 타입 정의
    colors: {
      black: string;
      gray50: string;
      gray40: string;
      gray30: string;
      gray20: string;
      gray10: string;
      gray5: string;
      white: string;
      red40: string;
      red30: string;
      red20: string;
      red10: string;
      blue20: string;
      blue10: string;
      green20: string;
      green10: string;
      kakao: string;
    };

    // 2. 폰트 타입 정의 (굵기, 크기, 행간, 자간을 포함한 텍스트 스타일 세트)

    fonts: {
      family: string;
      weight: {
        bold: number;
        medium: number;
        regular: number;
      };
      h1: string;
      h3: string;
      h2: string;
      h4: string;
      body1Bold: string;
      body1Regular: string;
      body2Bold: string;
      body2Regular: string;
      caption: string;
    };
  }
}
