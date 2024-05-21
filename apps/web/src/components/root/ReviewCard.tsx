'use client';

import { FC } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface ReviewCardProps {
  review: string | undefined;
  rating: number | undefined;
  username: string | undefined;
}

const ReviewCard: FC<ReviewCardProps> = ({ username, review, rating }) => {
  const initial = username?.substring(0, 2);
  return (
    <section>
      <hr className="border-1 " />
      <div className="">
        {/* after */}
        <div className="flex gap-4 items-center ">
          <Avatar className="h-14 w-14 items-center">
            <AvatarImage src="" />
            <AvatarFallback>{initial}</AvatarFallback>
          </Avatar>
          <div className="my-3 text-xs text-justify md:mr-36 ">
            <p className="my-2">{username}</p>
            <p className="my-2">{rating}</p>
            <p className="my-2 border p-2 rounded-md">{review}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewCard;
