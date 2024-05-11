import SideBar from '@/components/admin/SideBar';

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
