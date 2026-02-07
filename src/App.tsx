import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  EmployerLayout,
  FullLayout,
  AuthLayout,
  UserLayout,
} from './components/Layout/Layout';

import ShopDetailPage from './pages/ShopDetailPage';
import ShopCreatePage from './pages/ShopCreatePage';

import Signup from '@/pages/SignupPage';
import Login from '@/pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FullLayout />}>
          <Route path="shop/create" element={<ShopCreatePage />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route element={<EmployerLayout />}>
          <Route path="shop/:id" element={<ShopDetailPage />} />
        </Route>

        <Route element={<UserLayout />}>
          {/* 여기에 user 전용 라우트 추가 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
