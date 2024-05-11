'use client';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import useGetPromotions from '@/hooks/api/event/useGetPromotionEvent';
import { appConfig } from '@/utils/config';
import { format } from 'date-fns';
import { CalendarIcon, LocateIcon } from 'lucide-react';
import Image from 'next/image';

const PromotionCard = ({}) => {
  const { data: events } = useGetPromotions();
  return (
    <section className="bg-blue-700 w-full text-white md:pt-7 md:pb-10 py-6 pb-8">
      <div className=" px-8 container mx-auto md:px-36">
        <div className="md:pb-4 mb-2 text-center">
          <h1 className="font-bold md:text-2xl text-xl">PROMOTION !!!</h1>
          <p className="font-light">Kumpulan event-event laris manis di sini</p>
        </div>
        <div className="flex justify-center">
          <Carousel className="md:w-full w-[300px] max-w-7xl">
            <CarouselContent className="-ml-2 md:-ml-4 w-[300px]">
              {events.map((event, index) => {
                return (
                  <>
                    <CarouselItem className="pl-2 md:pl-4">
                      <Card>
                        <div className="relative h-[200px] rounded-t-xl overflow-hidden">
                          <Image
                            src={
                              appConfig.baseURL + `/assets${event.thumbnail}`
                            }
                            alt="foto1"
                            objectFit="cover"
                            layout="fill"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="md:text-xl">
                            {event.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col md:text-xs gap-2">
                          <p className="flex gap-4">
                            <CalendarIcon size={15} />
                            {format(event.startDate, 'dd MMMM yyyy')} -
                            {format(event.endDate, 'dd MMMM yyyy')}
                          </p>
                          <p className="flex gap-4">
                            <LocateIcon size={15} />
                            {event.location}
                          </p>
                        </CardContent>
                        <CardFooter className="flex gap-2">
                          <Badge>{event.category}</Badge>
                        </CardFooter>
                      </Card>
                    </CarouselItem>
                  </>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PromotionCard;
