'use client';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const SideBar = () => {
  const router = useRouter();

  return (
    <section className="container bg-[#EEEE] h-screen w-full">
      <div className="flex flex-col gap-6">
        <h1 className="font-bold text-2xl p-5 mt-10">Account Settings</h1>
        <div className="w-4/5">
          <Button
            variant="ghost"
            className=" flex gap-2 justify-between cursor-pointer"
            onClick={() => router.push('/account-info')}
          >
            <LayoutDashboard />
            <span className="mr-10"> Account Info</span>
          </Button>
          {/* <Button
            variant="ghost"
            className="flex gap-2 justify-between cursor-pointer"
            onClick={() => router.push('/change-email')}
          >
            <BarChart2 />
            <span className="mr-10"> Change Email</span>
          </Button>
          <Button
            variant="ghost"
            className="flex gap-2 justify-between cursor-pointer"
            onClick={() => router.push('/change-password')}
          >
            <LayoutList />
            <span className="mr-10">Change Password</span>
          </Button> */}
          
        </div>
      </div>
    </section>
  );
};

export default SideBar;
