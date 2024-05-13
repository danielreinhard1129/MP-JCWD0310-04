'use client';

// import Markdown from '@/components/Markdown';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import useGetEvent from '@/hooks/api/event/useGetEvent';
import { format } from 'date-fns';
import {
  CalendarIcon,
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
        <div className="relative h-[400px] overflow-hidden w">
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
              <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'/>
        </div>
      </section>

      {/* information of event and organizer */}
      <div className="flex justify-between mx-5">
        <div className=" flex flex-col items-center">
          <Avatar className="mx-auto">
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="rounded-full w-24 h-24"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h2 className=" mb-2 text-xl font-bold">Hosted By:</h2>
          <p className="text-base font-light ">{event.organizer.username}</p>
        </div>
        <div className="w-2/3 mx-4">
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            temporibus ad maiores, nisi minus vero expedita excepturi, illo
            culpa neque dignissimos sed sunt illum eligendi nobis earum
            aspernatur ab debitis.
          </p>
        </div>

        {/* buy ticket data */}
        <div className=" w-1/3 pb-2">
          <div className="border p-4 rounded ">
            <p className="text-sm font-light italic flex gap-2 place-items-center">
              <CalendarIcon className="w-8 h-8 " />
              {format(event.startDate, 'dd MMMM yyyy')} -{' '}
              {format(event.endDate, 'dd MMMM yyyy')}
            </p>
            <div className="flex gap-2 my-1">
              <p>Time : </p>
              {event.time}
            </div>
            <p className="line-clamp-3 flex gap-1">
              <LocateIcon size={15} />
              {event.location}
            </p>
            <div>
              <p>Available Seat :</p>
              {event.availableSeats}
            </div>
            <div>
              <p>Booked :</p>
              <div className="flex gap-2 justify-between">
                <SquarePlus size={20} />
                {event.booked}
                <SquareMinus size={20} />
              </div>
            </div>
            <div className="flex gap-2">
              <p>Price:</p>
              {event.price}
            </div>
            <div className="my-auto py-2  ">
              <Button className="gap-1 ">
                <Ticket size="20px" />
                Buy Tickets
              </Button>
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
