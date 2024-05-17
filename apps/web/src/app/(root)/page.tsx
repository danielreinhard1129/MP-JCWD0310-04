'use client';
import Autocomplete from '@/components/AutoComplete';
import EventCard from '@/components/EventCard';
import PromotionEvent from '@/components/PromotionEvent';
import UpcomingEvent from '@/components/UpcomingEvent';

export default function Home() {
  return (
    <>
      {/* herosection */}
      <section className="relative h-screen overflow-hidden bg-[url('/assets/images/heroSectionminpro.jpg')] bg-cover bg-center bg-no-repeat md:p-10  text-center text-white ">
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h2 className="mb-4 md:text-8xl text-6xl font-normal">
                EVENTURE
              </h2>
              <h4 className="mb-6 md:text-xl text-lg font-semibold">
                MUSIC BECOMES YOUR NEW ADVENTURE
              </h4>
              <Autocomplete />
            </div>
          </div>
        </div>
      </section>

      {/* eventCard upcoming event */}
      <UpcomingEvent />

      {/* promotion */}
      <PromotionEvent />

      {/* Popular event */}

      <EventCard />
    </>
  );
}
