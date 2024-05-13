import Sidebar from '@/components/admin/SideBar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Sidebar />
      <div className="ml-52">{children}</div>
    </div>
  );
};

export default Layout;
