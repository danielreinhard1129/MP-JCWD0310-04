// 'use client';
// import  from '@/components/admin/TableEventList';
// import useGetEvent from '@/hooks/api/event/useGetEvent';

// export default function EventList() {
//   const { data: events } = useGetEvent();

//   return (
//     <section className="container h-screen w-full ml-60">
//       <div className="text-4xl font-bold p-5 mt-10">
//         <h1>Event List</h1>
//       </div>
//       <hr className=" border-1 border-gray-700" />

//       {Event.map((event, index) => {
//         return (
//           <TableEventList
//             key={index}
//             title={event.title}
//             category={event.category}
//             startDate={new Date(event.startDate)}
//             endDate={new Date(event.endDate)}
//             location={event.location}
//             venue={event.venue}
//             availableSeats={event.availableSeats}
//             isFree={event.isFree}
//             ticketTypes={event.ticketTypes}
//             price={event.price}
//           />
//         );
//       })}
//     </section>
//   );
// }
