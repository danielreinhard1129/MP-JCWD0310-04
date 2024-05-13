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
import { format } from 'date-fns';
import { CalendarIcon, LocateIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Button } from './ui/button';

interface PromotionCardProps {
  title: string;
  description: string;
  location: string;
  category: string;
  author: string;
  imageUrl: string;
  startDate: Date;
  endDate: Date;
  eventId: number;
  price: number;
  voucher: string;
}

const PromotionCard: FC<PromotionCardProps> = ({
  title,
  author,
  category,
  description,
  location,
  price,
  imageUrl,
  startDate,
  endDate,
  eventId,
  voucher,
}) => {
  const priceEvent = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(price);
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
              <Link href={`${eventId}`}>
                <CarouselItem className="pl-2 md:pl-4">
                  <Card>
                    <div className="relative h-[200px] rounded-t-xl overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt="foto1"
                        objectFit="cover"
                        layout="fill"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="md:text-xl">{title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col md:text-xs gap-2">
                      <p className="text-sm font-light italic flex gap-1">
                        <CalendarIcon size={15} />
                        {format(startDate, 'dd MMMM yyyy')} -
                        {format(endDate, 'dd MMMM yyyy')}
                      </p>
                      <p className="line-clamp-3 flex gap-1">
                        <LocateIcon size={15} />
                        {location}
                      </p>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <CardFooter className="flex justify-between md:text-sm">
                        <div> {priceEvent} </div>
                        <Button className="bg-blue-700">Buy</Button>
                      </CardFooter>
                      <Badge>{category}</Badge>
                      <div>{voucher}</div>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              </Link>
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
