import { Outlet } from 'react-router-dom';
import { MainContent, MainWrapper } from '@/styles/EmployerLayoutStyles';

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
    <MainWrapper>
      <MainContent>
        <Outlet />
      </MainContent>
    </MainWrapper>
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
