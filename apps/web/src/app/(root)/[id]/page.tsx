'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import useGetEvent from '@/hooks/api/event/useGetEvent';
import { format } from 'date-fns';
import {
  CalendarIcon,
  EditIcon,
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
import { appConfig } from '@/utils/config';
import { Avatar } from '@radix-ui/react-avatar';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import SkeletonEventDetail from './components/SkeletonEventDetail';
import Review from '@/components/Review';

const EventDetail = ({ params }: { params: { id: string } }) => {
  const { event, isLoading } = useGetEvent(Number(params.id));

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

      <section className="">
        <div className="relative h-[400px] overflow-hidden ">
          <Image
            fill
            src={`${appConfig.baseURL}/assets${event.thumbnail}`}
            alt="thumbnail image"
            className="w-full h-full bg-center md:bg-cover bg-contain"
            // style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="container">
          <div className=" m-4 space-y-2 mx-auto px-4">
            <Badge
              variant="outline"
              className="inline-block px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-sm"
            >
              {event.category}
            </Badge>
            <div className="flex items-center md:justify-between">
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
          <div className=" md:justify-between md:mx-5 my-8 grid md:grid-cols-7 ">
            {/* description */}
            <div className=" md:py-4 md:col-span-5 md:px-10">
              <p className="text-base text-gray-700 indent-16 text-justify gap-5">
                {event.description}
              </p>

              {/* organizer */}
              <div className=" flex items-center gap-5 my-4">
                <Avatar className="mx-2 my-2">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    className="rounded-full w-20 h-20"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <h2 className="  text-base font-bold text-black">
                    Hosted By:
                  </h2>
                  <p className="text-sm font-semibold text-black">
                    {event.organizer.username}
                  </p>
                </div>
              </div>
            </div>

            {/* buy ticket data */}
            <div className="relative md:col-span-2  md:py-4 ">
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
                      <p> {event.price} </p>
                    </div>
                   
                   
                  </div>
                </CardContent>

                <CardFooter className="bg-[#E8EDFB] py-4 px-6 flex justify-end items-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-primary text-white hover:bg-primary-dark rounded-lg w-[225px] gap-4">
                        <Ticket size="24px" />
                        Buy Tickets
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[650px] max-h-[600px]">
                      <DialogHeader>
                        <DialogTitle>Purchase Ticket</DialogTitle>
                        <DialogTitle>{event.title}</DialogTitle>
                        <DialogDescription></DialogDescription>
                      </DialogHeader>
                      <div className="grid grid-cols-4 gap-4">
                        Dialog content here
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="font-bold text-lg">TOTAL - 0</div>
                        <Button
                          type="submit"
                          className="bg-primary text-white hover:bg-primary-dark py-2 px-4 rounded-lg"
                        >
                          Buy
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </div>

            {/* review and rating */}
          </div>
          <div className=" md:justify-between md:mx-5 grid md:grid-cols-7">
            <div className="md:mx-5 col-span-5">
              <Review />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventDetail;
