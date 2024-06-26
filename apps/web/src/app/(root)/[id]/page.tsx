'use client';
import { Button } from '@/components/ui/button';
import useGetEvent from '@/hooks/api/event/useGetEvent';
import { format } from 'date-fns';
import { CalendarIcon, EditIcon, LocateIcon, Share2 } from 'lucide-react';

import ReviewCard from '@/components/root/ReviewCard';
import ReviewForm from '@/components/root/ReviewForm';
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import useGetEvents from '@/hooks/api/event/useGetEvents';
import useGetReviewByEvent from '@/hooks/api/reviews/useGetReviewByEvent';
import { useAppSelector } from '@/redux/hooks';
import { appConfig } from '@/utils/config';
import { Avatar } from '@radix-ui/react-avatar';
import Image from 'next/image';
import { notFound, useRouter } from 'next/navigation';
import { useState } from 'react';
import ModalOrderConfirmation from './components/ModalOrderConfirmation';
import OrderCard from './components/OrderCard';
import SkeletonEventDetail from './components/SkeletonEventDetail';

const EventDetail = ({ params }: { params: { id: string } }) => {
  const { id: userId, role, point } = useAppSelector((state) => state.user);
  const { event, isLoading } = useGetEvent(Number(params.id));
  const router = useRouter();
  const [page, setPage] = useState(1);
  const { data: events } = useGetEvents({ page, take: 4 });
  const [open, setOpen] = useState(false);
  const excludedEvent = event?.id;
  const filteredEvent = events.filter((event) => event.id !== excludedEvent);
  const { data: reviews } = useGetReviewByEvent(Number(params.id));

  const handleClick = () => {
    if (userId) {
      setOpen(true);
    } else {
      router.push('/login');
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
      {/* Image and Title Section */}
      <section className="md:mb-3">
        <div className="relative h-[400px] overflow-hidden">
          <Image
            fill
            src={`${appConfig.baseURL}/assets${event.thumbnail_url}`}
            alt="thumbnail image"
            className="w-full h-full"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="container m-4 space-y-2 mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-semibold">{event.title}</h1>
              <p className="text-sm">
                {format(event.start_date, 'dd MMMM yyyy')}
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
<<<<<<< Updated upstream
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
                  {event.user.username}
                </p>
              </div>
            </div>
          </div>
          {/* buy ticket data */}
          <div className="md:col-span-2 relative flex justify-center items-center w-full">
            <Card className="bg-white shadow-lg rounded-lg overflow-hidden ">
              <CardHeader className="bg-primary py-4 text-white rounded-t-md">
                <CardTitle className="flex items-center gap-4 justify-start px-4">
                  <CalendarIcon className="w-8 h-8" />
                  <span>
                    {format(event.start_date, 'hh MMM yyyy')} -
                    {format(event.end_date, 'hh MMM yyyy')}
                  </span>
                </CardTitle>
                <CardDescription className="px-4">
                  <div className="flex items-center text-base text-white py-2">
                    <p>Time:</p>
                    <p className="ml-1">{event.time}</p>
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
                    <p>{event.limit}</p>
                  </div>
                  <div>
                    <p>Booked:</p>
                    <p>{event.booked}</p>
                  </div>
                  {/* <div>
                    <p>Price: </p>
                    <p>{event.price}</p>
                  </div> */}
                </div>
              </CardContent>
              <CardFooter className="bg-[#E8EDFB] p-4 flex justify-center items-center gap-4">
                <div className="flex mx-auto justify-betweeen">
                  <OrderCard price={event.price} setOpen={handleClick} />
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className=" md:justify-between md:mx-5 grid md:grid-cols-7">
          <div className="md:mx-5 col-span-5">
            <ReviewForm />
            <div>
              {reviews && reviews.length > 0 ? (
                reviews.map((review: any, index: any) => (
                  <div key={index}>
                    <ReviewCard
                      username={review?.user?.username}
                      rating={review?.rating}
                      review={review?.review}
                    />
                  </div>
                ))
              ) : (
                <p>No reviews available.</p>
              )}
            <div>
              {reviews && reviews.length > 0 ? (
                reviews.map((review: any, index: any) => (
                  <div key={index}>
                    <ReviewCard
                      username={review?.user?.username}
                      rating={review?.rating}
                      review={review?.review}
                    />
                  </div>
                ))
              ) : (
                <p>No reviews available.</p>
              )}
            </div>
          </div>
        </div>
=======
>>>>>>> Stashed changes
      </section>

      <div className="md:justify-between mx-5 my-8 grid md:grid-cols-7 container">
        {/* Description Section */}
        <div className="py-4 md:col-span-5 md:px-10">
          <p className="text-base text-gray-700 indent-16 text-justify gap-5">
            {event.description}
          </p>
          {/* Organizer Section */}
          <div className="flex items-center gap-5">
            <Avatar className="mx-2 my-2">
              <AvatarImage
                src="https://github.com/shadcn.png"
                className="rounded-full w-20 h-20"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h2 className="text-base font-bold text-black">Hosted By:</h2>
              <p className="text-sm font-semibold text-black">
                {event.user.username}
              </p>
            </div>
          </div>
        </div>

        {/* Ticket Section */}
        <div className="md:col-span-2 relative flex justify-center items-center w-full">
          <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="bg-primary py-4 text-white rounded-t-md">
              <CardTitle className="flex items-center gap-4 justify-start px-4">
                <CalendarIcon className="w-8 h-8" />
                <span>
                  {format(event.start_date, 'hh MMM yyyy')} -{' '}
                  {format(event.end_date, 'hh MMM yyyy')}
                </span>
              </CardTitle>
              <CardDescription className="px-4">
                <div className="flex items-center text-base text-white py-2">
                  <p>Time:</p>
                  <p className="ml-1">{event.time}</p>
                </div>
                <p className="text-sm text-white font-medium flex items-center gap-1">
                  <LocateIcon size={15} />
                  <span>
                    {event.location}, {event.address}
                  </span>
                </p>
                <hr className="mt-2 border-gray-300" />
              </CardDescription>
            </CardHeader>
            <CardContent className="px-4 py-2 bg-[#E8EDFB]">
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                <div>
                  <p>Available Seat:</p>
                  <p>{event.limit}</p>
                </div>
                <div>
                  <p>Booked:</p>
                  <p>{event.booked}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-[#E8EDFB] py-4 px-4 flex flex-col justify-center items-center">
              <OrderCard price={event.price} setOpen={handleClick} />
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="md:justify-between md:mx-5 grid md:grid-cols-7">
        <div className="md:mx-5 col-span-5">
          <ReviewForm />
          <div>
            {reviews && reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={index}>
                  <ReviewCard
                    username={review.user.username}
                    rating={review.rating}
                    review={review.review}
                  />
                </div>
              ))
            ) : (
              <p>No reviews available.</p>
            )}
          </div>
        </div>
      </div>

      <ModalOrderConfirmation
        open={open}
        price={event.price}
        point={point}
        setOpen={setOpen}
      />
    </main>
  );
};

export default EventDetail;
