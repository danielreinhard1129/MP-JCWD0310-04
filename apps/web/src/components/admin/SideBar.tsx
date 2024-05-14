'use client';
import { Button } from '@/components/ui/button';
import {
  BarChart2,
  CreditCard,
  LayoutDashboard,
  LayoutList,
  SquareCheckBig,
  SquareGanttChart,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SideBar = () => {
  const router = useRouter();

  return (
    <section className="container fixed top-0 left-0 bg-primary text-[#6EDEF5] h-screen w-64">
      <div className="flex flex-col gap-6 mt-5">
        <div className=" relative h-[50px] w-full mx-auto  p-5 mt-10">
          <Image
            src="/assets/images/logo-no-background.png"
            alt="logonobg"
            fill
          />
        </div>

        <div className="w-4/5">
          <Button
            variant="ghost"
            className=" flex gap-2 justify-between cursor-pointer"
            onClick={() => router.push('/dashboard')}
          >
            <LayoutDashboard />
            <span className="mr-10"> Dashboard</span>
          </Button>
          <Button
            variant="ghost"
            className="flex gap-2 justify-between cursor-pointer"
            onClick={() => router.push('/statistic')}
          >
            <BarChart2 />
            <span className="mr-10"> Statistic</span>
          </Button>
          <Button
            variant="ghost"
            className="flex gap-2 justify-between cursor-pointer"
            onClick={() => router.push('/event-list')}
          >
            <LayoutList />
            <span className="mr-10">Event List</span>
          </Button>
          <Button
            variant="ghost"
            className="flex gap-2 justify-between cursor-pointer"
            onClick={() => router.push('/transaction')}
          >
            <CreditCard />
            <span className="mr-10"> Transaction</span>
          </Button>
          <Button
            variant="ghost"
            className="flex gap-2 justify-between cursor-pointer"
            onClick={() => router.push('/approval')}
          >
            <SquareCheckBig />
            <span className="mr-10">Approval</span>
          </Button>
          <Button
            variant="ghost"
            className="flex gap-2 justify-between cursor-pointer"
            onClick={() => router.push('/create')}
          >
            <SquareGanttChart />
            <span className="mr-10 ">Create Event</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
