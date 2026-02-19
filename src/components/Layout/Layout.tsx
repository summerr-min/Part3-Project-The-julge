// import { Outlet, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import NavBar from '@/components/common/NavBar/NavBar';
import { ProfileStorage } from '@/contexts/ProfileContext';

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
    </div>
  );
}

export function FullLayout() {
  // const navigate = useNavigate();

  return (
    <>
      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
}
