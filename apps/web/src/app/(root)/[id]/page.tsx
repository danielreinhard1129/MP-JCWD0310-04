'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import useGetEvent from '@/hooks/api/event/useGetEvent';
import { format } from 'date-fns';
import {
  CalendarIcon,
  CircleMinus,
  CirclePlus,
  LocateIcon,
  Share2,
  SquareMinus,
  SquarePlus,
  Ticket,
} from 'lucide-react';
import Image from 'next/image';
import SkeletonEventDetail from './components/SkeletonEventDetail';
import { notFound } from 'next/navigation';
import { appConfig } from '@/utils/config';
import { Avatar } from '@radix-ui/react-avatar';
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

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
      <section className=" mb-8 ">
        <div className="relative h-[400px] overflow-hidden ">
          <Image
            fill
            src={`${appConfig.baseURL}/assets${event.thumbnail}`}
            alt="thumbnail image"
            className="w-full h-full"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="container relative m-4  space-y-2 mx-auto px-4">
          <Badge
            variant="outline"
            className="inline-block px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-sm"
          >
            {event.category}
          </Badge>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-semibold">{event.title}</h1>
              <p className="text-sm">
                {format(new Date(event.startDate), 'dd MMMM yyyy')}
              </p>
            </div>
            <div>
              <Button
                variant="outline"
                size="icon"
                className="p-2 text-gray-600 bg-gray-100 rounded-full focus:outline-none focus:bg-gray-200"
              >
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
      </section>

      {/* information of event and organizer */}
      <div className="md:flex md:justify-between mx-5">
        <div className=" flex flex-col md:items-center">
          <Avatar className="md:mx-auto">
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="rounded-full w-24 h-24"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex gap-3 md:flex-col md:gap-0">
            <h2 className=" md:mb-2 text-xl font-bold">Hosted By:</h2>
            <p className="text-xl font-semibold ">{event.organizer.username}</p>
          </div>
        </div>
        <div className="w-2/3 mx-4">
          <p className="text-sm text-gray-700">{event.description}</p>
        </div>

        {/* buy ticket data */}
        <div className="md:w-1/3 w-1/2  md:pb-2">
          <div className="border p-4 rounded ">
            <p className="text-sm font-light italic flex gap-2 place-items-center">
              <CalendarIcon className="w-8 h-8 " />
              {format(event.startDate, 'hh MMM yyyy')} -{' '}
              {format(event.endDate, 'hh MMM yyyy')}
            </p>
            <div className="flex gap-2 my-1">
              <p>Time : </p>
              <p>
                {format(new Date(event.startDate), 'HH:mm')} -{' '}
                {format(new Date(event.endDate), 'HH:mm')}{' '}
              </p>
            </div>
            <p className="line-clamp-3 flex gap-1">
              <LocateIcon size={15} />
              {event.location.city},<br />
              {event.venue}
            </p>

            <div>
              <p>Available Seat :</p>
              {event.availableSeats}
            </div>
            <div>
              <p>Booked :</p>
              <div className="flex gap-2 justify-evenly">
                <SquarePlus size={20} />
                {event.booked}
                <SquareMinus size={20} />
              </div>
            </div>
            <div className="flex gap-2">
              <p>Price:</p>
              {event.ticketTypes.length > 0 && event.ticketTypes[0].price}
            </div>
            <div className="flex gap-2">
              <p>Ticket Type:</p>
              {event.ticketTypes.length > 0 && event.ticketTypes[0].name}
              {event.ticketTypes.length > 0 && event.ticketTypes[0].limit}
            </div>
            <div className="my-auto py-2  ">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="gap-1 ">
                    <Ticket size="20px" />
                    Buy Tickets
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-[650px] max-h-[600px]">
                  <DialogHeader>
                    <DialogTitle>Purchase Ticket</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when youre
                      done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-4">
                    <div className="bg-red-400 col-span-3 w-full h-96">
                      <div className="flex justify-between gap-5 mx-10 my-10">
                        <div className="bg-blue-400 w-36 h- 44"></div>
                        <div className="bg-blue-400 w-36 h-44"></div>
                        <div className="bg-blue-400 w-36 h-44"></div>
                      </div>
                      <div className="flex justify-between mx-10 my-10">
                        <div className="bg-blue-400 w-44 h-20"></div>
                        <div className="bg-blue-400 w-44 h-20"></div>
                      </div>
                    </div>
                    <div className="bg-blue-400 col-span-1 w-full h-96 flex flex-col">
                      <div className="flex justify-between mx-4">
                        <div className="w-8 h-8 my-6 bg-red-400 flex items-center justify-center">
                          <SquareMinus />
                        </div>
                        <div className="w-8 h-8 my-6 bg-red-400 text-center flex items-center justify-center">
                          0
                        </div>
                        <div className="w-8 h-8 my-6 bg-red-400 flex items-center justify-center">
                          <CircleMinus />
                        </div>
                      </div>
                      <div className="flex-grow"></div>
                      <div className="mx-4 mb-4 bg-red-400 h-10"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <div className="font-bold">TOTAL - 0</div>
                    <Button type="submit">Buy</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>

      {/* data event */}
      <section></section>
    </main>
  );
};

export default EventDetail;
