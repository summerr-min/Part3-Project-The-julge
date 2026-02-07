// import { Outlet, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

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
    <main>
      <div>
        <Outlet />
      </div>
    </main>
  );
}
