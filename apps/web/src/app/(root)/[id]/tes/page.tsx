'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import useGetEvent from '@/hooks/api/event/useGetEvent';
import { format } from 'date-fns';
import {
  CalendarIcon,
  CircleDollarSign,
  CircleMinus,
  CirclePlus,
  EditIcon,
  Loader,
  LocateIcon,
  Share2,
  Ticket,
} from 'lucide-react';

import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import useGetReward from '@/hooks/api/event/useGetReward';
import useCreateTransaction from '@/hooks/api/transaction/useCreateTransaction';
import { useAppSelector } from '@/redux/hooks';
import { appConfig } from '@/utils/config';
import { Avatar } from '@radix-ui/react-avatar';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import SkeletonEventDetail from '../components/SkeletonEventDetail';
import { useFormik } from 'formik';
import { IFormCreateTransaction } from '@/types/ts.type';

const EventDetail = ({ params }: { params: { id: string } }) => {
  const { createTransaction, isLoadinger } = useCreateTransaction();
  const { id, points } = useAppSelector((state) => state.user);
  const { reward } = useGetReward(id);
  const { event, isLoading } = useGetEvent(Number(params.id));
  const [qty, setQty] = useState<number>(0);

  const formik = useFormik<IFormCreateTransaction>({
    initialValues: {
      qty: 0,
      totalAmount: 0,
    },
    onSubmit: (values) => {
      console.log(values);

      createTransaction({ ...values, userId: id, eventId: 1 });
    },
  });

  const handleIncrement = () => {
    setQty((prevQty) => prevQty + 1);
    const newQty = qty + 1;
    const newTotal = (event?.price || 0) * newQty;
    formik.setFieldValue('totalAmount', newTotal);
    formik.setFieldValue('qty', newQty);
  };

  const handleDecrement = () => {
    if (qty > 0) {
      setQty((prevQty) => prevQty - 1);
      const newQty = qty - 1;
      const newTotal = (event?.price || 0) * (qty - 1);
      formik.setFieldValue('totalAmount', newTotal);
      formik.setFieldValue('qty', newQty);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4">
        <SkeletonEventDetail />
      </div>
    );
  }

  if (!event) {
    return notFound();
  }

  return (
    <main>
      {/* image and title components */}
      <section className=" mb-8">
        <div className="relative h-[400px] overflow-hidden ">
          <Image
            fill
            src={`${appConfig.baseURL}/assets${event.thumbnail}`}
            alt="thumbnail image"
            className="w-full h-full"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="container m-4  space-y-2 mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-semibold">{event.title}</h1>
              <p className="text-sm">
                {format(new Date(event.startDate), 'dd MMMM yyyy')}
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="p-2 text-gray-600 bg-gray-100 rounded-full focus:outline-none focus:bg-gray-200"
              >
                <Share2 className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="p-2 text-gray-600 bg-gray-100 rounded-full focus:outline-none focus:bg-gray-200"
              >
                <EditIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
        <div className=" md:justify-between mx-5 my-8 grid md:grid-cols-7 container">
          {/* description */}
          <div className=" py-4 md:col-span-5 md:px-10">
            <p className="text-base text-gray-700 indent-16 text-justify gap-5">
              {event.description}
            </p>
            {/* organizer */}
            <div className=" flex items-center gap-5 ">
              <Avatar className="mx-2 my-2">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  className="rounded-full w-20 h-20"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex  flex-col">
                <h2 className="  text-base font-bold text-black">Hosted By:</h2>
                <p className="text-sm font-semibold text-black">
                  {event.organizer.username}
                </p>
              </div>
            </div>
          </div>
          {/* buy ticket data */}
          <div className="md:col-span-2 relative">
            <Card className="bg-white shadow-lg rounded-lg overflow-hidden ">
              <CardHeader className="bg-primary py-4 text-white rounded-t-md">
                <CardTitle className="flex items-center gap-4 justify-start px-4">
                  <CalendarIcon className="w-8 h-8" />
                  <span>
                    {format(event.startDate, 'hh MMM yyyy')} -
                    {format(event.endDate, 'hh MMM yyyy')}
                  </span>
                </CardTitle>
                <CardDescription className="px-4">
                  <div className="flex items-center text-base text-white py-2">
                    <p>Time:</p>
                    <p className="ml-1">
                      {format(new Date(event.startDate), 'HH:mm')} -{' '}
                      {format(new Date(event.endDate), 'HH:mm')}
                    </p>
                  </div>
                  <p className=" text-sm text-white font-medium flex items-center gap-1">
                    <LocateIcon size={15} />
                    <span>
                      {event.location}, {event.address}
                    </span>
                  </p>
                  <hr className="mt-2 border-gray-300" />
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 py-2 bg-[#E8EDFB] ">
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                  <div className="">
                    <p>Available Seat:</p>
                    <p>{event.availableSeats}</p>
                  </div>
                  <div>
                    <p>Booked:</p>
                    <p>{event.booked}</p>
                  </div>
                  <div>
                    <p>Price: </p>
                    <p>{event.price}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-[#E8EDFB] py-4 px-6 flex flex-col justify-center items-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-primary text-white hover:bg-primary-dark rounded-lg w-[225px] gap-4">
                      <Ticket size="24px" />
                      Buy Tickets
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-[500px] max-h-[500px]">
                    <DialogHeader>
                      <DialogTitle>Purchase Ticket</DialogTitle>
                      <div className="text-pretty">
                        Available Seats {event.availableSeats} - RP.
                        {event.price}
                      </div>
                    </DialogHeader>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="flex flex-col ">
                        <div className="flex justify-between mx-10">
                          <div className="">{event.title}</div>
                          <div className="flex justify-between w-[145px] h-[30px] mb-3 items-center select-none">
                            <Button
                              type="button"
                              onClick={handleDecrement}
                              disabled={qty === 0}
                            >
                              <CircleMinus />
                            </Button>
                            <div className="text-lg font-semibold">{qty}</div>
                            <Button
                              onClick={handleIncrement}
                              type="button"
                              className="cursor-pointer hover:text-green-700 hover:font-bold"
                            >
                              <CirclePlus />
                            </Button>
                          </div>
                        </div>
                        <div className="flex justify-between md:mx-2 mx-10">
                          <div className="md:w-[120px] md:h-[50px] w-[80px] h-[50px] border shadow-lg bg-white flex items-center hover:bg-primary hover:text-white">
                            Voucher
                          </div>
                          <div className="md:w-[120px] md:h-[50px] w-[80px] h-[50px] border shadow-lg bg-white flex items-center hover:bg-primary hover:text-white">
                            {reward?.title}
                          </div>
                          <div className="md:w-[120px] md:h-[50px] w-[80px] h-[50px] border shadow-lg bg-white flex items-center justify-center gap-6 hover:bg-primary hover:text-white">
                            <CircleDollarSign />
                            <span>{points}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-4 select-none">
                        <div className="font-bold text-lg">
                          RP.
                          {formik.values.qty} - {formik.values.totalAmount}
                        </div>
                        <Button
                          disabled={isLoadinger}
                          type="submit"
                          className="bg-primary text-white hover:bg-primary-dark py-2 px-4 rounded-lg"
                        >
                          {isLoadinger && (
                            <Loader className="mr-2 h-4 w-4 animate-spin " />
                          )}
                          {isLoadinger ? 'Processing...' : 'Purchase'}
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventDetail;
