// 'use client';

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '@/components/ui/table';
// import useGetCategory from '@/hooks/api/event/useGetCategory';
// import useGetEvent from '@/hooks/api/event/useGetEvent';
// import { useAppSelector } from '@/redux/hooks';
// import { notFound } from 'next/navigation';



// const TableEvent = () => {
//     const {id} = useAppSelector((state)=>state.event);
//     const event = useGetEvent(id);
//    const { categories } = useGetCategory();

//    if (!event) {
//     return notFound();
//   }
//   return (
//     <section className="container h-screen w-full ">
//       <div className="text-4xl font-bold p-5 mt-10">
//         <h1>Event List of Organizer</h1>
//       </div>
//       <hr className=" border-4 border-gray-700" />

//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="w-[100px]">Event Name</TableHead>
//             <TableHead>thumbnail</TableHead>
//             <TableHead>Location</TableHead>
//             <TableHead>Venue</TableHead>
//             <TableHead>Category</TableHead>
//             <TableHead>Start Date</TableHead>
//             <TableHead>End Date</TableHead>
//             <TableHead>Start Time</TableHead>
//             <TableHead>Available Seats</TableHead>
//             <TableHead>Booked</TableHead>
//             <TableHead>Ticket Types</TableHead>
//             <TableHead>Free Event</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           <TableRow>
//             <TableCell className="font-medium">Java Jazz</TableCell>
//             <TableCell>Festival</TableCell>
//             <TableCell>11 agustus 2024</TableCell>
//             <TableCell>14 agustus 2024</TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//     </section>
//   );
// };

// export default TableEvent;
