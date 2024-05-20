'use client';
import Autocomplete from '@/components/AutoComplete';
import CardEventSkeleton from '@/components/CardEvenSkeleton';
import { CategoryPicker } from '@/components/CategoryPicker';
import EventCardNew from '@/components/EventCardNew';
import { LocationPicker } from '@/components/LocationPicker';
import Pagination from '@/components/Pagination';
import useGetEventsByFilter from '@/hooks/api/event/useGetEventByFilter';
import { appConfig } from '@/utils/config';
import Image from 'next/image';
import { useEffect, useState } from 'react';
// import noeventfound from '@/public/assets/images/noeventfound.png';

export default function Home() {
  const [page, setPage] = useState<number>(1);
  const [location, setLocation] = useState<string>('all');
  const [category, setCategory] = useState<string>('all');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const {
    data: events,
    meta,
    refetch,
  } = useGetEventsByFilter({
    page,
    take: 6,
    location,
    category,
  });

  const handleChangePaginate = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  const handleLocationChange = (newLocation: string) => {
    setLocation(newLocation);
    setPage(1);
  };

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    setPage(1);
  };

  useEffect(() => {
    refetch().finally(() => setIsLoading(false));
  }, [location, category, page]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden bg-[url('/assets/images/heroSectionminpro.jpg')] bg-cover bg-center bg-no-repeat md:p-10 text-center text-white">
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

      {/* Event Card Upcoming Event */}
      <section className="container mx-auto py-6 md:px-36 px-8">
        <CategoryPicker onChange={handleCategoryChange} />
        <LocationPicker onChange={handleLocationChange} />
        <h1 className="font-bold md:text-2xl text-xl md:py-6">
          Upcoming Event
        </h1>
        {isLoading ? (
          <div className="flex flex-col xl:flex-row w-full gap-4 pt-6">
            <CardEventSkeleton />
            <CardEventSkeleton />
            <CardEventSkeleton />
            <CardEventSkeleton />
          </div>
        ) : (
          <div>
            {events?.length === 0 ? (
              <div className="container mb-40 mt-10 flex flex-col items-center p-0">
                <div className="flex w-full justify-center">
                  {/* <Image
                    src=""
                    alt="no event found"
                    height={400}
                    className="object-contain opacity-50"
                    draggable="false"
                  /> */}
                  {/* <div>no event found</div> */}
                </div>
                <p className="text-md -mt-16 mb-10 font-medium text-neutral-300 xl:text-xl">
                  Sorry, we cant find any event for you
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-4 py-4 md:gap-4">
                {events?.map((event, index) => {
                  return (
                    <EventCardNew
                      key={index}
                      title={event.title}
                      author="tes"
                      category={event.category}
                      description={event.description}
                      location={event.location}
                      imageUrl={
                        appConfig.baseURL + `/assets${event.thumbnail_url}`
                      }
                      startDate={new Date(event.start_date)}
                      endDate={new Date(event.end_date)}
                      price={event.price}
                      eventId={event.id}
                    />
                  );
                })}
              </div>
            )}
          </div>
        )}
        <div className="mx-auto w-fit">
          <Pagination
            total={meta?.total || 0}
            take={meta?.take || 0}
            onChangePage={handleChangePaginate}
          />
        </div>
      </section>

      {/* Promotion */}
      {/* <PromotionEvent /> */}

      {/* Popular Event */}
      {/* <EventCard /> */}
    </>
  );
}
