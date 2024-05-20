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
  EditIcon,
  Loader,
  LocateIcon,
  Minus,
  Plus,
  Share2,
  Ticket,
  TicketPercent,
} from 'lucide-react';

import ReviewForm from '@/components/ReviewForm';
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
import { IFormCreateTransaction } from '@/types/ts.type';
import { appConfig } from '@/utils/config';
import { Avatar } from '@radix-ui/react-avatar';
import { useFormik } from 'formik';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import SkeletonEventDetail from './components/SkeletonEventDetail';
import useGetReview from '@/hooks/api/review/useGetReview';

const EventDetail = ({ params }: { params: { id: string } }) => {
  const { createTransaction, isLoadinger } = useCreateTransaction();
  const { id, points } = useAppSelector((state) => state.user);
  const { reward } = useGetReward(id);
  const { event, isLoading } = useGetEvent(Number(params.id));
  const [qty, setQty] = useState<number>(0);
  
  const formik = useFormik<IFormCreateTransaction>({
    initialValues: {
      qty: 0,
      total: 0,
    },
    onSubmit: (values) => {
      console.log(values);
      
      createTransaction({ ...values, userId: id, eventId: 1 });
    },
  });
  const { review } = useGetReview(id);

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
                  <DialogContent className="rounded-md w-full max-w-md ">
                    <DialogHeader>
                      <DialogTitle className=" bg-primary rounded-md">
                        <h1 className="py-5 ">
                          Order Summary
                          <br />
                          {event.title}
                        </h1>
                      </DialogTitle>
                      <div className="text-left italic text-sm border bg-gray-100 ">
                        <h1 className="font-semibold not-italic">
                          Location Details:
                        </h1>
                        <p>{event.location},</p>
                        <p>{event.address}</p>

                        <p>
                          {format(new Date(event.startDate), 'dd MMMM yyyy')}-{' '}
                          {format(new Date(event.endDate), 'dd MMMM yyyy')}
                        </p>
                      </div>

                      <div className="text-pretty flex justify-evenly py-2">
                        <p>Available Seats :</p>
                        {event.availableSeats}
                      </div>
                    </DialogHeader>

                    <form onSubmit={formik.handleSubmit}>
                      <div className="flex flex-col ">
                        {/* price and title */}
                        <div className="flex justify-between mx-2 items-center">
                          <div className="flex flex-col">
                            amount:
                            <br />
                            {qty} x {event.price}
                          </div>

                          {/* quantity of ticket */}
                          <div className="flex justify-end w-[145px] h-[30px] mb-3 items-center select-none gap-5 mt-2">
                            <Button
                              type="button"
                              onClick={handleDecrement}
                              disabled={qty === 0}
                              className="h-8"
                            >
                              <Minus />
                            </Button>
                            <div className="text-lg font-semibold">{qty}</div>
                            <Button
                              onClick={handleIncrement}
                              type="button"
                              className="cursor-pointer hover:text-green-700 hover:font-bold h-8"
                            >
                              <Plus />
                            </Button>
                          </div>
                        </div>

                        {/* voucher and rewards */}
                        <div className="flex justify-between md:mx-2 mx-10">
                          <div className="md:w-[120px] md:h-[45px] w-[80px] h-[50px] border shadow-lg bg-white flex items-center justify-center hover:bg-primary hover:text-white rounded-sm">
                            <TicketPercent />

                            <span>Voucher</span>
                          </div>
                          <div className="md:w-[120px] md:h-[45px] w-[80px] h-[50px] border shadow-lg bg-white flex items-center justify-center hover:bg-primary hover:text-white rounded-sm">
                            {reward?.title}
                          </div>
                          <div className="md:w-[120px] md:h-[45px] w-[80px] h-[50px] border shadow-lg bg-white flex items-center justify-center gap-6 hover:bg-primary hover:text-white rounded-sm">
                            <CircleDollarSign />
                            <span>{points}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mt-4 select-none">
                        <div className="font-bold text-lg">
                          <div
                            className=" flex justiy-between
                        "
                          >
                            <p>total Ticket:</p>
                            <p>{formik.values.qty}</p>
                          </div>
                          <div>
                            <p>Total Price:</p>
                            <p>RP.{formik.values.total}</p>
                          </div>
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
        <div className=" md:justify-between md:mx-5 grid md:grid-cols-7">
          <div className="md:mx-5 col-span-5">
            <ReviewForm />

            <div className="flex gap-4 items-center ">

              <div className="my-3 text-xs text-justify md:mr-36 ">
                <p className="my-2"> {review?.rating}</p>
                <p className="my-2">{review?.comment}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventDetail;
