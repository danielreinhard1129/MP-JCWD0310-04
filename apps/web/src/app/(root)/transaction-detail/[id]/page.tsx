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
import { Separator } from '@/components/ui/separator';
import useGetTransaction from '@/hooks/api/tx/useGetTransaction';
import { TicketIcon } from 'lucide-react';

const Transaction = ({ params }: { params: { id: string } }) => {
  const { id, role, point } = useAppSelector((state) => state.user);
  const { transaction, isLoading } = useGetTransaction(Number(params.id));
  const start_date = transaction?.event?.start_date;
  const voucher_event = transaction?.event.Voucher;

  return (
    <div className="grid min-h-screen w-full overflow-hidden justify-center">
      <div className="flex flex-col gap-6 border-lp-6 md:p-10">
        <Card>
          <CardHeader>
            <CardTitle>Transaction Details</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between px-30">
              <p>price</p>
              <p>{transaction?.event.price}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Voucher Event</p>
              {/* <p className="text-primary">{voucher_event}</p> */}
            </div>
            <div className="flex items-center justify-between">
              <p>Referral Code point</p>
              <p className="text-primary">{transaction?.user.point}</p>
            </div>

            <div className="flex items-center justify-between font-medium">
              <p>Total</p>
              <p>{transaction?.total}</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Payment Proof</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="flex flex-col gap-8 p-6 md:p-10   ">
        <div className="grid gap-6">
          <div className="grid gap-2 justify-center items-center">
            <h1 className="text-2xl font-bold">Checkout</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Review your order details before completing your purchase.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center py-3">
                Ticket Information
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid  grid-cols-2 items-center gap-4">
                <div className="grid gap-1">
                  <h3 className="font-medium">{transaction?.event.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {/* {format(new Date(start_date), 'dd MMMM yyyy')} */} ppp
                  </p>
                </div>
                <div className="text-right ">
                  <div className="flex items-center gap-2 justify-center">
                    <Button className="px-2" size="sm" variant="outline">
                      -
                    </Button>
                    <h4 className="font-medium">{transaction?.qty}</h4>
                    <Button className="px-2" size="sm" variant="outline">
                      +
                    </Button>
                  </div>
                </div>
              </div>

              <Separator />
              <div className="grid items-center gap-4">
                <div className="grid grid-cols-2 gap-1">
                  <div className="flex">
                    <TicketIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <h3 className="font-medium">Ticket Details</h3>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex justify-center items-center">
                    {transaction?.event.title}({transaction?.qty})
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Transaction;
