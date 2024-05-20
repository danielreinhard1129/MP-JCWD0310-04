'use client';

import { Button } from '@/components/ui/button';
import useGetTransaction from '@/hooks/api/tx/useGetTransaction';
import { useAppSelector } from '@/redux/hooks';

const Transaction = () => {
  const { id } = useAppSelector((state) => state.user);
  const { transaction } = useGetTransaction(Number(id));
  return (
    <section className="container h-full w-full">
      <div className="text-2xl font-semibold">Transaction Details</div>
      <div className="border">
        <h1 className=" flex justify-center py-4">Name of event</h1>
        <div className="py-2">
          <div className="flex justify-evenly">
            <p>total ticket</p>
            <p>totalticket</p>
            <p>{transaction?.event.address}</p>
          </div>
          <div className="flex justify-evenly">
            <p>total price</p>
            <p>totalprice</p>
          </div>

          <div>payment Proof</div>
          <Button>Submit</Button>
          <div>status payment</div>
        </div>
      </div>
    </section>
  );
};

export default Transaction;
