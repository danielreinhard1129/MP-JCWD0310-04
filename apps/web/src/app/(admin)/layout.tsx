import Header from '@/components/Header';
import SideBar from '@/components/admin/SideBar';
import NavBar from '@/components/admin/NavBar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
