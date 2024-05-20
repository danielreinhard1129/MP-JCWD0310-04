import Header from '@/components/Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="">{children}</div>
    </div>
  );
};

export default Layout;
