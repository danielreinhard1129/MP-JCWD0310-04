import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { format } from 'date-fns';
import { CalendarIcon, LocateIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
interface EventCardProps {
  title: string;
  description: string;
  location: string;
  category: string;
  author: string;
  imageUrl: string;
  startDate: Date;
  endDate: Date;
  eventId: number;
  price: number | string;
}

const EventCardNew: FC<EventCardProps> = ({
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
}) => {
  const priceEvent =
    typeof price === 'number'
      ? new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
        }).format(price)
      : price;
  return (
    <Link href={`${eventId}`}>
      <Card className="shadow-xl md:mb-4 mb-6">
        <CardHeader>
          <div className="relative h-[200px] rounded-t-xl overflow-hidden">
            <Image
              src={imageUrl}
              alt="Thumbnail"
              style={{ objectFit: 'cover' }}
              fill
              className="bg-center"
            />
          </div>
        </CardHeader>
        <CardContent className="flex flex-col md:text-xs gap-2">
          <div>
            <Badge
              variant="outline"
              className="rounded-sm bg-green-100 w-16 h-5 text-sm"
            >
              {category}
            </Badge>
          </div>
          <CardTitle className="md:text-xl">{title}</CardTitle>

          <p className="text-sm font-light italic flex gap-1">
            <CalendarIcon size={20} />
            {format(new Date(startDate), 'hh MMM yyyy')} -{' '}
            {format(new Date(endDate), 'hh MMM yyyy')}
          </p>
          <p className="line-clamp-3 flex gap-1">
            <LocateIcon size={20} />
            {location}
          </p>
        </CardContent>
        <CardFooter className="flex justify-between md:text-sm">
          <div>{priceEvent}</div>
          <Button className="bg-blue-700 w-1/4">Buy</Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default EventCardNew;
