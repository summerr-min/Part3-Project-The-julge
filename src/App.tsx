import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  EmployerLayout,
  FullLayout,
  AuthLayout,
  UserLayout,
} from './components/Layout/Layout';

import ShopDetailPage from './pages/ShopDetailPage';
import ShopCreatePage from './pages/ShopCreatePage';
import ProfilePage from './pages/ProfilePage';
import ProfileEditPage from './pages/ProfileEditPage';

import TestPage from './pages/TestPage';
import Signup from './pages/SignupPage';
import Login from './pages/LoginPage';

import { theme } from '@/styles/theme';
import { GlobalStyles } from '@/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<FullLayout />}>
            <Route path="shop/create" element={<ShopCreatePage />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="/test" element={<TestPage />} />
          </Route>

          <Route element={<EmployerLayout />}>
            <Route path="shop/:id" element={<ShopDetailPage />} />
          </Route>

          <Route element={<UserLayout />}>
            <Route path="profile" element={<ProfilePage />} />
            <Route path="profile/edit" element={<ProfileEditPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
