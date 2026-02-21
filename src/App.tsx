import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {
  EmployerLayout,
  FullLayout,
  AuthLayout,
  UserLayout,
} from './components/Layout/Layout';

import ShopCreatePage from './pages/ShopCreatePage';
import ProfilePage from './pages/ProfilePage';
import ProfileEditPage from './pages/ProfileEditPage';
import ProfileDetailsPage from './pages/ProfileDetailsPage';
import NoticeListPage from './pages/NoticeListPage';
import NoticeDetailPage from './pages/NoticeDetailPage';

import TestPage from './pages/TestPage';
import Signup from './pages/SignupPage';
import Login from './pages/LoginPage';

import { theme } from '@/styles/theme';
import { GlobalStyles } from '@/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import EmployerRoute from './components/employer/EmployerRoute/EmployerRoute';
import ShopRegisterPage from './pages/ShopRegisterPage/ShopRegisterPage';
import ShopRegisterFormPage from './pages/ShopRegisterFormPage/ShopRegisterFormPage';
import ShopNoticeDetailPage from './pages/ShopNoticeDetailPage/ShopNoticeDetailPage';
import ShopNoticeRegisterFormPage from './pages/ShopNoticeRegisterFormPage/ShopNoticeRegisterFormPage';
import ShopDetailPage from './pages/ShopDetailPage/ShopDetailPage';
import { LayoutWithNavbarFooter } from './components/Layout/LayoutWithNavbarFooter';

import { AuthProvider } from '@/contexts/AuthContext';
import { ProfileStorage } from '@/contexts/ProfileContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <ProfileStorage>
          <BrowserRouter>
            <Routes>
              <Route element={<AuthLayout />}>
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
                <Route path="/test" element={<TestPage />} />
              </Route>

              <Route element={<LayoutWithNavbarFooter />}>
                <Route element={<FullLayout />}>
                  <Route
                    path="/"
                    element={<Navigate to="/notices" replace />}
                  />
                  <Route path="/notices" element={<NoticeListPage />} />
                  <Route
                    path="/shops/:shopId/notices/:noticeId/detail"
                    element={<NoticeDetailPage />}
                  />
                  <Route path="shop/create" element={<ShopCreatePage />} />
                </Route>

                <Route element={<EmployerLayout />}>
                  <Route element={<EmployerRoute />}>
                    <Route
                      path="/shops/:shopId/"
                      element={<ShopDetailPage />}
                    />
                    <Route
                      path="/shops/register/"
                      element={<ShopRegisterPage />}
                    />
                    <Route
                      path="/shops/:shopId/edit"
                      element={<ShopRegisterFormPage />}
                    />
                    <Route
                      path="/shops/register/form/"
                      element={<ShopRegisterFormPage />}
                    />
                    <Route
                      path="/shops/:shopId/notices/:noticeId"
                      element={<ShopNoticeDetailPage />}
                    />
                    <Route
                      path="/shops/:shopId/notices"
                      element={<ShopNoticeRegisterFormPage />}
                    />
                    <Route
                      path="/shops/:shopId/notices/:noticeId/edit"
                      element={<ShopNoticeRegisterFormPage />}
                    />
                  </Route>
                </Route>

                <Route element={<UserLayout />}>
                  <Route path="profile" element={<ProfilePage />} />
                  <Route path="profile/edit" element={<ProfileEditPage />} />
                  <Route
                    path="profile/details"
                    element={<ProfileDetailsPage />}
                  />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </ProfileStorage>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
