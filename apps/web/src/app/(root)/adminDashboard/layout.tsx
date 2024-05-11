import Header from '@/components/Header';
import SideBar from '@/components/admin/dashboard/SideBar/SideBar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        <SideBar/>
      {children}
    </div>
  );
};

export default Layout;
