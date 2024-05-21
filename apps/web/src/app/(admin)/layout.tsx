'use client';
import Sidebar from '@/components/admin/SideBar';
// import AuthGuard from '@/hoc/AuthGuardAdmin';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Sidebar />
      <div className="md:ml-64">{children}</div>
    </div>
  );
};

export default Layout;
