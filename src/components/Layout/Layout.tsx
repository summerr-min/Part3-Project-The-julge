// import { Outlet, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import NavBar from '@/components/common/NavBar/NavBar';
import { ProfileStorage } from '@/contexts/ProfileContext';
import Footer from '../common/Footer/Footer';

export function AuthLayout() {
  return (
    <div>
      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export function EmployerLayout() {
  return (
    <div>
      <NavBar />
      <main>
        <div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function UserLayout() {
  return (
    <div>
      <NavBar />
      <main>
        <div>
          <ProfileStorage>
            <Outlet />
          </ProfileStorage>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function FullLayout() {
  // const navigate = useNavigate();

  return (
    <div>
      <NavBar />
      <main>
        <div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
