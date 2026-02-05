import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  EmployerLayout,
  FullLayout,
  LandingLayout,
  UserLayout,
} from './components/Layout/Layout';
import ShopDetailPage from './pages/ShopDetailPage';
import ShopCreatePage from './pages/ShopCreatePage';

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
    </BrowserRouter>
  );
}

export default App;
