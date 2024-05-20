'use client';

import { useAppDispatch } from '@/redux/hooks';
import { logoutAction } from '@/redux/slices/userSlice';
import {
  BarChart2,
  LayoutDashboard,
  LayoutList,
  LogOutIcon,
  SquareCheckBig,
  SquareGanttChart,
} from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const SideBar = () => {
  const dispatch = useAppDispatch();
  const logout = () => {
    localStorage.removeItem('token');
    dispatch(logoutAction());
    router.push('/');
  };
  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard /> },
    { path: '/statistic', label: 'Statistic', icon: <BarChart2 /> },
    { path: '/event-list', label: 'Event List', icon: <LayoutList /> },
    { path: '/approval', label: 'Approval', icon: <SquareCheckBig /> },
    { path: '/create', label: 'Create Event', icon: <SquareGanttChart /> },
    // { path: '/profile-organizer', label: 'Profile', icon: <User2Icon /> },
  ];
  const getMenuItemClass = (path: string) =>
    pathname === path
      ? 'flex p-3 items-center cursor-pointer bg-white text-black'
      : 'flex p-3 items-center cursor-pointer hover:bg-white hover:text-black transition duration-300 ease-in-out';
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className="fixed top-0 left-0 bg-primary text-white h-screen w-64">
      <div className=" relative h-[50px] w-full mx-auto  p-5 mt-10">
        <Image
          src="/assets/images/eventure_logo.png"
          alt="logonobg"
          style={{ objectFit: 'contain' }}
          fill
          onClick={() => router.push('/dashboard')}
        />
      </div>
      <div className="flex flex-col">
        <div className="w-full mt-8 font-semibold text-sm">
          {menuItems.map((item) => (
            <div
              key={item.path}
              className={getMenuItemClass(item.path)}
              onClick={() => router.push(item.path)}
              style={{ userSelect: 'none' }}
            >
              <div className="mx-8">{item.icon}</div>
              <span className="mr-10">{item.label}</span>
            </div>
          ))}
          <div
            className="flex p-3 items-center cursor-pointer hover:bg-white transition duration-300 ease-in-out hover:text-red-500"
            onClick={logout}
          >
            <div className="mx-8">
              <LogOutIcon />
            </div>
            <span className="mr-10">Log Out</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
