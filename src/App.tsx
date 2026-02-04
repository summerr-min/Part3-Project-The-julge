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
import instance from './api/axios';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const testAuth = async () => {
      // 1. 테스트용 가짜 토큰
      localStorage.setItem('accessToken', 'test-token-12345');

      try {
        // 2. 인스턴스로 아무 API나 호출 (인터셉터가 토큰을 붙이는지 확인용)
        await instance.get('/users/any-id');
      } catch (error) {
        // 실제 서버가 없거나 id가 틀려도 Network 탭에서 Header는 찍힙니다.
      }
    };

    testAuth();
  }, []);
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
    </BrowserRouter>
  );
}

export default App;
