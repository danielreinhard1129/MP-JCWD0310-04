'use client';

import { useAppSelector } from '@/redux/hooks';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import useGetEvent from '@/hooks/api/event/useGetEvent';
import { appConfig } from '@/utils/config';
import { GiftIcon, TicketIcon } from 'lucide-react';
import Image from 'next/image';


const TransactionChecktout = ({ params }: { params: { id: string } }) => {
  const { id, role, point } = useAppSelector((state) => state.user);
  const { event, isLoading } = useGetEvent(Number(params.id));

  return (
    <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[1fr_400px]">
      <div className="flex flex-col gap-8 p-6 md:p-10">
        <div className="grid gap-6">
          <div className="grid gap-2">
            <h1 className="text-2xl font-bold">Checkout</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Review your order details before completing your purchase.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Ticket Information</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                <Image
                  fill
                  src={`${appConfig.baseURL}/assets${event?.thumbnail_url}`}
                  alt="thumbnail image"
                  className="w-full h-full"
                  style={{ objectFit: 'cover' }}
                />
                <div className="grid gap-1">
                  <h3 className="font-medium">Acme Music Festival</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    July 15, 2023 - July 17, 2023
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <Button className="px-2" size="sm" variant="outline">
                      -
                    </Button>
                    <h4 className="font-medium">2 Tickets</h4>
                    <Button className="px-2" size="sm" variant="outline">
                      +
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    General Admission
                  </p>
                </div>
              </div>
              <Separator />
              <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                <TicketIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <div className="grid gap-1">
                  <h3 className="font-medium">Ticket Details</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    2 General Admission tickets
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Discounts & Rewards</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                <TicketIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <div className="grid gap-1">
                  <h3 className="font-medium">Promo Code</h3>
                  <div className="flex items-center gap-2">
                    <Input
                      className="max-w-[200px]"
                      id="promo-code"
                      placeholder="Enter promo code"
                    />
                    <Button size="sm">Apply</Button>
                  </div>
                </div>
                <div className="text-right">
                  <h4 className="font-medium text-primary">-$10.00</h4>
                </div>
              </div>
              <Separator />
              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                <GiftIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <div className="grid gap-1">
                  <h3 className="font-medium">Loyalty Points</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    You have 500 points available
                  </p>
                  <div className="flex items-center gap-2">
                    <Input
                      className="max-w-[200px]"
                      id="loyalty-points"
                      placeholder="Enter points to use"
                    />
                    <Button size="sm">Use Points</Button>
                  </div>
                </div>
                <div className="text-right">
                  <h4 className="font-medium text-primary">-$25.00</h4>
                </div>
              </div>
              <Separator />
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex flex-col gap-6 border-l bg-gray-100/40 p-6 md:p-10 dark:bg-gray-800/40">
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <p>Ticket (2)</p>
              <p>$100.00</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Promo Code</p>
              <p className="text-primary">-$10.00</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Referral Code</p>
              <p className="text-primary">-$5.00</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Loyalty Points Used</p>
              <p className="text-primary">-$25.00</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between font-medium">
              <p>Total</p>
              <p>$60.00</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Complete Purchase</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default TransactionChecktout;

<div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[1fr_400px]">
  <div className="flex flex-col gap-8 p-6 md:p-10">
    <div className="grid gap-6">
      <div className="grid gap-2">
        <h1 className="text-2xl font-bold">Checkout</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Review your order details before completing your purchase.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Ticket Information</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
            {/* <Image
              fill
              src={`${appConfig.baseURL}/assets${event?.thumbnail_url}`}
              alt="thumbnail image"
              className="w-full h-full"
              style={{ objectFit: 'cover' }}
            /> */}
            <div className="grid gap-1">
              <h3 className="font-medium">Acme Music Festival</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                July 15, 2023 - July 17, 2023
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2">
                <Button className="px-2" size="sm" variant="outline">
                  -
                </Button>
                <h4 className="font-medium">2 Tickets</h4>
                <Button className="px-2" size="sm" variant="outline">
                  +
                </Button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                General Admission
              </p>
            </div>
          </div>
          <Separator />
          <div className="grid grid-cols-[auto_1fr] items-center gap-4">
            <TicketIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            <div className="grid gap-1">
              <h3 className="font-medium">Ticket Details</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                2 General Admission tickets
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Discounts & Rewards</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
            <TicketIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            <div className="grid gap-1">
              <h3 className="font-medium">Promo Code</h3>
              <div className="flex items-center gap-2">
                <Input
                  className="max-w-[200px]"
                  id="promo-code"
                  placeholder="Enter promo code"
                />
                <Button size="sm">Apply</Button>
              </div>
            </div>
            <div className="text-right">
              <h4 className="font-medium text-primary">-$10.00</h4>
            </div>
          </div>
          <Separator />
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
            <GiftIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            <div className="grid gap-1">
              <h3 className="font-medium">Loyalty Points</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                You have 500 points available
              </p>
              <div className="flex items-center gap-2">
                <Input
                  className="max-w-[200px]"
                  id="loyalty-points"
                  placeholder="Enter points to use"
                />
                <Button size="sm">Use Points</Button>
              </div>
            </div>
            <div className="text-right">
              <h4 className="font-medium text-primary">-$25.00</h4>
            </div>
          </div>
          <Separator />
        </CardContent>
      </Card>
    </div>
  </div>
  <div className="flex flex-col gap-6 border-l bg-gray-100/40 p-6 md:p-10 dark:bg-gray-800/40">
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center justify-between">
          <p>Ticket (2)</p>
          <p>$100.00</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Promo Code</p>
          <p className="text-primary">-$10.00</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Referral Code</p>
          <p className="text-primary">-$5.00</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Loyalty Points Used</p>
          <p className="text-primary">-$25.00</p>
        </div>
        <Separator />
        <div className="flex items-center justify-between font-medium">
          <p>Total</p>
          <p>$60.00</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Complete Purchase</Button>
      </CardFooter>
    </Card>
  </div>
</div>;

{
  /* <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
          <Link2Icon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          <div className="grid gap-1">
            <h3 className="font-medium">Referral Code</h3>
            <div className="flex items-center gap-2">
              <Input className="max-w-[200px]" id="referral-code" placeholder="Enter referral code" />
              <Button size="sm">Apply</Button>
            </div>
          </div>
          <div className="text-right">
            <h4 className="font-medium text-primary">-$5.00</h4>
          </div>
        </div> */
}
