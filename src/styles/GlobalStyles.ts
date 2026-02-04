import { createGlobalStyle } from 'styled-components';

/**
 * [공용 스타일] 프로젝트 전역에 적용되는 초기화 스타일 및 폰트 설정
 * * @description
 * 1. 디자인 가이드에 따른 기본 배경색 화이트 (#FFFFFF) 및 텍스트 컬러 블랙(#111322) 적용
 * 2. Spoqa Han Sans Neo 폰트 패밀리 전역 설정
 * 3. 브라우저 기본 스타일 초기화
 *
 * 파일은 팀 규칙상 .js 권장이나, 아래와 같은 사유로 .ts로 작성
 * 1. 자동완성 이슈: .js 환경에서 styled.d.ts의 타입 선언이 theme 객체와 완벽히 연결되지 않아 .ts로 작성
 * 2. 개발 편의성: theme.colors나 theme.fonts 입력 시 오타 방지 및 실시간 자동 완성
 */

export const GlobalStyles = createGlobalStyle(({ theme }) => ({
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video':
    {
      margin: 0,
      padding: 0,
      border: 0,
      fontSize: '100%',
      font: 'inherit',
      verticalAlign: 'baseline',
    },

  // HTML5 display-role 리셋
  'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section':
    {
      display: 'block',
    },

  'ol, ul': {
    listStyle: 'none',
  },

  'blockquote, q': {
    quotes: 'none',
    '&:before, &:after': {
      content: 'none',
    },
  },

  table: {
    borderCollapse: 'collapse',
    borderSpacing: 0,
  },

  // 1. 브라우저 기본 스타일
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  // 2. 바디 스타일 설정
  body: {
    lineHeight: 1,
    fontFamily: theme.fonts.family,
    backgroundColor: theme.colors.white,
    color: theme.colors.black,
    // 텍스트 렌더링 최적화
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },

  // 3. 버튼, 입력창 초기화
  button: {
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    fontFamily: 'inherit',
    padding: 0,
  },
  'input, textarea': {
    fontFamily: 'inherit',
    outline: 'none',
  },
  // 링크 및 리스트 초기화
  a: {
    textDecoration: 'none',
  },
  // 특정 영역(프로필,공고,가게정보 등록)배경색을 gray 5(#FAFAFA)로 지정할 때 사용
  '.bgSub': {
    backgroundColor: theme.colors.gray5,
  },
}));
