import EventCard from '@/components/EventCard';
import Category from '@/components/Category';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import EmailNews from '@/components/EmailNews';

export default function Home() {
  return (
    <main>
      {' '}
      <div className=" bg-[#212120]">
        {/* heroSection */}
        <section>
          <div className="relative z-0">
            <div
              className="from 0% absolute flex flex-col justify-center bg-opacity-75 bg-gradient-to-tr from-black via-60% to-100% pt-16
         inset-0 px-[100px] py-32"
            >
              <h1 className="text-left font-sans font-bold text-white text-9xl">
                Eventure
              </h1>
              <p className="text-left font-sans text-lg mt-3 font-medium text-white pb-6">
                {' '}
                Music become your new Adventure
              </p>

              <Input
                type="text"
                placeholder="search"
                className=" rounded-md text-black h-auto w-auto "
              />
            </div>

            <Image
              src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="heroSection"
              width="1441"
              height="668"
              className="rounded-t-lg shadow-md object-cover"
            />
          </div>
        </section>
        <Category />
        <EventCard />
        <EmailNews />
      </div>
    </main>
  );
}
