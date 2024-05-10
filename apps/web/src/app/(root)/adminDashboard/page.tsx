'use client';

import EventList from '@/components/admin/EventList';
import { Button } from '@/components/ui/button';
const AdminDashboard = () => {
  return (
    <section>
      <div className="container py-10 mx-auto px-10 ">
        <div className="flex pb-2">
          <h1 className="font-bold text-2xl w-1/5">Logo</h1>
          <div className="w-4/5 flex items-center align-bottom">
            <h1 className="font-bold text-4xl">Dashboard</h1>
          </div>
        </div>

        <div className="flex">
          <div className="w-1/5  bg-[#EEEE] ">
            <div className="flex flex-col gap-6">
              <Button variant="ghost" className="flex justify-between">
                <span className="mr-10"> Dashboard</span>
              </Button>
              <Button variant="ghost" className="flex justify-between">
                <span className="mr-10"> Statistic</span>
              </Button>
              <Button variant="ghost" className="flex justify-between">
                <span className="mr-10">Event List</span>
              </Button>
              <Button variant="ghost" className="flex justify-between">
                <span className="mr-10"> Transaction</span>
              </Button>
              <Button variant="ghost" className="flex justify-between">
                <span className="mr-10">Approval</span>
              </Button>
            </div>
          </div>
          <div className='w-full'>
            <EventList/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
