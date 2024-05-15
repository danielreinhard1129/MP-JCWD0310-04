'use client';
import EventCardNew from '@/components/EventCardNew';
import Pagination from '@/components/Pagination';
import useGetEvents from '@/hooks/api/event/useGetEvents';
import { appConfig } from '@/utils/config';
import { useState } from 'react';

export default function UpcomingEvent() {
  const [page, setPage] = useState<number>(1);
  const { data: events, meta } = useGetEvents({
    page: page,
    take: 6,
  });

  const handleChangePaginate = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  // const ticketPrice = event.ticketTypes[0].price;
  // const filteredEvents = events.filter(
  //   (event) => event.isFree || event.ticketTypes.length === 0,
  // );

  return (
    <section className="container mx-auto py-6 md:px-36 px-8">
      <h1 className="font-bold md:text-2xl text-xl md:py-6">Upcoming Event</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 py-4 md:gap-4">
        {events.map((event, index) => {
          return (
            <EventCardNew
              key={index}
              title={event.title}
              author={event.organizer.username}
              category={event.category}
              description={event.description}
              location={event.location.city}
              imageUrl={appConfig.baseURL + `/assets${event.thumbnail}`}
              startDate={new Date(event.startDate)}
              endDate={new Date(event.endDate)}
              price={
                event.ticketTypes.length === 0 ||
                event.ticketTypes[0].price === 0 ||
                event.ticketTypes[0].price === null
                  ? 'FREE'
                  : event.ticketTypes[0].price
              }
              eventId={event.id}
            />
          );
        })}
      </div>
      <div className="flex justify-center my-4">
        <Pagination
          total={meta?.total || 0}
          take={meta?.take || 0}
          onChangePage={handleChangePaginate}
        />
      </div>
    </section>
  );
}
