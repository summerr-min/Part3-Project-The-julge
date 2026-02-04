import styled from 'styled-components';
/**
 * 전역 설정 확인을 위한 테스트 컴포넌트
 * @component
 */

const TestTitleStyles = styled.h1`
  ${({ theme }) => theme.fonts.h1};
  color: ${({ theme }) => theme.colors.red40};
`;
function App() {
  return (
    <>
      <TestTitleStyles>디자인 적용 확인(폰트 적용 완료)</TestTitleStyles>
    </>
  );
}

export default App;
