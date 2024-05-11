import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { format } from 'date-fns';
import Image from 'next/image';
import { FC } from 'react';
import { Badge } from './ui/badge';
import Link from 'next/link';
import { Button } from './ui/button';

interface EventCardProps {
  title: string;
  description: string;
  category: string;
  author: string;
  imageUrl: string;
  createdAt: Date;
  eventId: number;
  price: number;
}

const EventCardNew: FC<EventCardProps> = ({
  title,
  author,
  category,
  description,
  price,
  imageUrl,
  createdAt,
  eventId,
}) => {
  return (
    <Link href={`/${eventId}`}>
      <Card className="shadow-xl md:mb-4 mb-6">
        <CardHeader>
          <div className="relative h-[200px] rounded-t-xl overflow-hidden">
            <Image
              src={imageUrl}
              alt="Thumbnail"
              style={{ objectFit: 'cover' }}
              fill
            />
          </div>
          <CardTitle className="md:text-xl">Metal Rock</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:text-xs gap-2">
          <Badge variant="outline" className="rounded-sm bg-green-100">
            {category}
          </Badge>
          <h2 className="line-clamp-2 text-lg font-semibold">{title}</h2>
          <p className="text-sm font-light italic">
            {format(createdAt, 'dd MMMM yyyy')} - {author}
          </p>
          <p className="line-clamp-3 ">{description}</p>
        </CardContent>
        <CardFooter className="flex justify-between md:text-sm">
          <div>{price}</div>
          <Button className="bg-blue-700">Buy</Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default EventCardNew;
