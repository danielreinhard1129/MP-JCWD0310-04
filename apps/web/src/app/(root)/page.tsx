'use client';
import Autocomplete from '@/components/AutoComplete';
import EventCard from '@/components/EventCard';
import PromotionCard from '@/components/PromotionCard';
import UpcomingEvent from '@/components/UpcomingEvent';
import useGetEvents from '@/hooks/api/event/useGetEvents';
import { useState } from 'react';

export default function Home() {
  const [page, setPage] = useState<number>(1);
  const { data: events, meta } = useGetEvents({
    page: page,
    take: 6,
  });

  const handleChangePaginate = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  return (
    <>
      {/* herosection */}
      <section className="relative h-[400px] overflow-hidden bg-[url('https://tecdn.b-cdn.net/img/new/slides/041.webp')] bg-cover bg-no-repeat p-12 text-center text-white">
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h2 className="mb-4 md:text-8xl text-6xl font-semibold">
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
      <PromotionCard  />

      {/* Popular event */}

      <EventCard />
    </>
  );
}
