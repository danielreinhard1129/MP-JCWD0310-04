import SideBar from '@/components/root/SideBar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div >
      <div>
        <SideBar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
