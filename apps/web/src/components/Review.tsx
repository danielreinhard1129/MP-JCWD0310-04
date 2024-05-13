"use client";

import  { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';


const Review: React.FC = (

) => {
//   [review, setReview] = useState('');


  return (
    <section>
      <div className="flex gap-4 ">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

{/*        
       form input review */}
</div>

      {/* <p className="my-1 text-right text-xs">{review.length}/200</p> */}

      <div className="flex justify-end">
        <Button>submit</Button>
      </div>
    </section>
  );
};

export default Review;
