'use client';

import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/redux/hooks';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import useGetTransaction from '@/hooks/api/tx/useGetTransaction';
import { TicketIcon } from 'lucide-react';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const Transaction = ({ params }: { params: { id: string } }) => {
  const { id, role, point } = useAppSelector((state) => state.user);
  const { transaction } = useGetTransaction(Number(params.id));
  const router = useRouter();
  const start_date = transaction?.event?.start_date;
  // const voucher_event = transaction?.event.Voucher;

  return (
    <section className="h-full w-full flex justify-center items-center py-10 px-[350px] bg-gray-50 dark:bg-gray-800">
      <div className="w-full max-w-4xl p-6 md:p-10 bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden grid gap-8">
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <CardHeader className=" flex justify-center flex-col w-full items-center">
            <CardTitle className="py-3 flex justify-">
              Transaction Details
            </CardTitle>
            <p className="text-gray-500 dark:text-gray-400">
              completing your purchase before rundown.
            </p>
            <div className="text-2xl font-bold py-1">rundown place</div>
          </CardHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-1">
            <div className="flex items-center space-x-2">
              <TicketIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              <h3 className="font-medium">Ticket Details</h3>
            </div>
          </div>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
              <div className="grid gap-1">
                <h3 className="font-medium">{transaction?.event.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {format(start_date || new Date(), 'hh MMM yyyy')}
                </p>
              </div>
              <div className="flex items-center justify-end space-x-2">
                <Button className="px-2" size="sm" variant="outline">
                  -
                </Button>
                <h4 className="font-medium">{transaction?.qty}</h4>
                <Button className="px-2" size="sm" variant="outline">
                  +
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p>Price</p>
              <p>{transaction?.event.price}</p>
            </div>
            <div className="flex items-center justify-between">
              {/* <p>Voucher Event</p>
                <p className="text-primary">{transaction?.event.Voucher}</p> */}
            </div>
            <div className="flex items-center justify-between">
              <p>Referral Code Point</p>
              <p className="text-primary">{transaction?.user.point}</p>
            </div>
            <div className="flex items-center justify-between font-medium">
              <p>Total</p>
              <p>{transaction?.total}</p>
            </div>
            <div className="space-y-4">
              <Label htmlFor="payment-file">Upload Payment</Label>
              <Input id="payment-file" type="file" />
            </div>
          </CardContent>
          <CardFooter className="flex gap-2 py-2">
            <Button className="w-full" onClick={() => router.push('/')}>
              Confirm Payment
            </Button>
            <Button className="w-full">History </Button>
          </CardFooter>
        </div>
      </div>
    </section>
  );
};
export default Transaction;
