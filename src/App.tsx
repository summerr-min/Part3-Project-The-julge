import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import {
  EmployerLayout,
  FullLayout,
  LandingLayout,
  UserLayout,
} from './components/Layout/Layout';
import ShopDetailPage from './pages/ShopDetailPage';
import ShopCreatePage from './pages/ShopCreatePage';
/**
 * 전역 설정 확인을 위한 테스트 컴포넌트
 * @component
 */

// const TestTitleStyles = styled.h1`
//   ${({ theme }) => theme.fonts.h1};
//   color: ${({ theme }) => theme.colors.red40};
// `;
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingLayout />}>
          {/* <Route path="/shop/:id/" element={<ShopDetailPage />} /> */}
        </Route>
        <Route element={<EmployerLayout />}>
          <Route path="/shop/:id/" element={<ShopDetailPage />} />
        </Route>
        <Route element={<UserLayout />}>
          {/* <Route path="/shop/:id/" element={<ShopDetailPage />} /> */}
        </Route>
        <Route element={<FullLayout />}>
          <Route path="/shop/create" element={<ShopCreatePage />} />
        </Route>
      </Routes>
      {/* <TestTitleStyles>디자인 적용 확인(폰트 적용 완료)</TestTitleStyles> */}
    </BrowserRouter>
  );
}

export default App;
