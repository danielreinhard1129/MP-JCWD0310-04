'use client';
import EventList from '@/components/admin/EventList';
import { Button } from '@/components/ui/button';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  BarChart2,
  CreditCard,
  LayoutDashboard,
  LayoutList,
  SquareCheckBig,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const SideBar = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { id } = useAppSelector((state) => state.user);
  // const menuItems =[
  //   title: "Pages",
  //   list:[
  //     {
  //       title: "Dashboard",
  //       path:"/dashboard",
  //       icon:<LayoutDashboard/>
  //     },
  //     {
  //       title: "Statistic",
  //       path:"/statistic",
  //       icon:<BarChart2/>
  //     },
  //     {
  //       title: "Event List",
  //       path:"/event-list",
  //       icon:<LayoutList/>
  //     },
  //     {
  //       title: "Transaction",
  //       path:"/transaction",
  //       icon: <CreditCard />
  //     },
  //     {
  //       title: "Approval",
  //       path:"/aprroval",
  //       icon: <SquareCheckBig />
  //     },
  //   ]
  // ]
  return (
    <section className="container">
      <div className="flex flex-col gap-6 bg-[#EEEE]">
        <h1 className="font-bold text-2xl w-1/5">Logo</h1>
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
        </div>
      </div>
    </section>
  );
};

export default SideBar;
