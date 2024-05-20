'use client';

import {
  BookIcon,
  DollarSign,
  FilterIcon,
  LocateIcon,
  TimerIcon,
} from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

const SideBar = () => {
  const menuItems = [
    { path: '/filter', label: 'Filter', icon: <FilterIcon /> },
    { path: '/location', label: 'Location', icon: <LocateIcon /> },
    { path: '/category', label: 'Category', icon: <BookIcon /> },
    { path: '/date', label: 'Date', icon: <TimerIcon /> },
    { path: '/Price', label: 'price', icon: <DollarSign /> },
  ];
  const getMenuItemClass = (path: string) =>
    pathname === path
      ? 'flex p-3 items-center cursor-pointer bg-white text-black'
      : 'flex p-3 items-center cursor-pointer hover:bg-white hover:text-black transition duration-300 ease-in-out';
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className="fixed top-20 left-0 z-50 bg-primary text-white w-64  h-screen">
      <h1 className="font-bold text-5xl md:w-1/4 flex justify-center md:justify-start pb-2 ">
        Explore
      </h1>
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
        </div>
      </div>
    </section>
  );
};

export default SideBar;
