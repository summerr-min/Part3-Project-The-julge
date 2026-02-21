import { Outlet } from 'react-router-dom';
import Footer from '../common/Footer/Footer';
import Navbar from '../common/NavBar/NavBar';

export function LayoutWithNavbarFooter() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
