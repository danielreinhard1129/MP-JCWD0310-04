'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import AuthGuard from '@/hoc/AuthGuardUser';

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <div className="flex h-screen flex-col">
//       <Header />
//       <main className="flex-1 md:mt-16 mt-14">{children}</main>
//       <Footer />
//     </div>
//   );
// }

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex-1 md:mt-16 mt-14">{children}</div>
      <Footer />
    </div>
  );
};

export default AuthGuard(Layout);
