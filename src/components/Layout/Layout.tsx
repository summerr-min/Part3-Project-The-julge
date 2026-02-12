// import { Outlet, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import NavBar from '@/components/common/NavBar/NavBar';

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
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export function FullLayout() {
  // const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
}
