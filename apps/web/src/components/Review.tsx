'use client';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';

const Review: React.FC = () => {
  return (
    <section>
      {/* review formTextArea */}
      <hr className="border-1 " />
      <div className="">
        <div className="flex gap-4 items-center ">
          <Avatar className="h-14 w-14 items-center">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="my-3 text-xs text-justify md:mr-36 ">
            <p className="my-2">Rating</p>
            <p className="my-2 border p-2 rounded-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              dicta explicabo nihil sequi nulla expedita illum totam eius
              inventore labore minima dolorem, ullam tempora aspernatur sed
              architecto, corporis similique. Exercitationem.
            </p>

            <div className="flex justify-end ">
              <Button>submit</Button>
            </div>
          </div>
        </div>

        {/* after */}
        <div className="flex gap-4 items-center ">
          <Avatar className="h-14 w-14 items-center">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="my-3 text-xs text-justify md:mr-36 ">
            <p className="my-2">Rating</p>
            <p className="my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              dicta explicabo nihil sequi nulla expedita illum totam eius
              inventore labore minima dolorem, ullam tempora aspernatur sed
              architecto, corporis similique. Exercitationem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
