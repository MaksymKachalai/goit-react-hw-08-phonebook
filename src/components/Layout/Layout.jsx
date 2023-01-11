import AppNavigation from 'components/AppNavigation/AppNavigation';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <AppNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
