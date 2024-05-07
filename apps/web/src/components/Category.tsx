'use client';

import Image from 'next/image';
import Link from 'next/link';

const Category = () => {
  return (
    <section className=" container gap-6 bg-[#212120] text-[#E7E7E5] px-20 pb-5 ">
      <div className=" text-3xl text-center py-5 mt-2 font-bold">
        <h1>Explore Categories</h1>
      </div>
      <div className="grid grid-cols-4 relative place-items-center text-center text-xl">
        <Link href="/">
          <Image
            src="https://plus.unsplash.com/premium_photo-1682600415610-e634ad0a485e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="band"
            width={150}
            height={150}
            objectFit="cover"
            className="rounded-full h-[150px] w-[150px] mb-5 "
          />
          <h1>Festival</h1>
        </Link>
        <Link href="/">
        <Image
            src="https://plus.unsplash.com/premium_photo-1682600415610-e634ad0a485e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="band"
            width={150}
            height={150}
            objectFit="cover"
            className="rounded-full h-[150px] w-[150px] mb-5"
          />
          <h1>Concert</h1>
        </Link>
        <Link href="/">
        <Image
            src="https://plus.unsplash.com/premium_photo-1682600415610-e634ad0a485e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="band"
            width={150}
            height={150}
            objectFit="cover"
            className="rounded-full h-[150px] w-[150px] mb-5"
          />
          <h1>Musical Theater</h1>
        </Link>
        <Link href="/">
        <Image
            src="https://plus.unsplash.com/premium_photo-1682600415610-e634ad0a485e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="band"
            width={150}
            height={150}
            objectFit="cover"
            className="rounded-full h-[150px] w-[150px] mb-5"
          />
          <h1>Night Life</h1>
        </Link>
      </div>
    </section>
  );
};

export default Category;
