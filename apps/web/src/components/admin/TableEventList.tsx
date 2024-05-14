// 'use client';
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '@/components/ui/table';
// import Link from 'next/link';
// import { FC } from 'react';
// import { format } from 'date-fns';

// interface TableEventListProps {
//   title: string;
//   category: string;
//   startDate: Date;
//   endDate: Date;
//   location: string;
//   venue: string;
//   organizerId: string;
//   ticketTypes: string;
//   price: number;
//   availableSeats: number;
//   eventId: number;
//   isFree: Boolean;
// }

// const TableEventList: FC<TableEventListProps> = ({
//   title,
//   category,
//   startDate,
//   endDate,
//   location,
//   venue,
//   organizerId,
//   ticketTypes,
//   price,
//   availableSeats,
//   eventId,
//   isFree
// }) => {
//   return (
//     <section>
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="w-[100px]">Event Name</TableHead>
//             <TableHead>Category</TableHead>
//             <TableHead>Start Date</TableHead>
//             <TableHead>End Date</TableHead>
//             <TableHead>Location</TableHead>
//             <TableHead>Venue</TableHead>
//             <TableHead>Available Seat</TableHead>
//             <TableHead>Status</TableHead>
//             <TableHead>is Free/ not</TableHead>
//             <TableHead>ticket Types</TableHead>
//             <TableHead>Price</TableHead>
//           </TableRow> 
//         </TableHeader>
//         <TableBody>
//           <Link href={`${eventId}`}>
//             <TableRow>
//               <TableCell className="font-medium">{title}</TableCell>
//               <TableCell>{category}</TableCell>
//               <TableCell>{format(startDate, 'dd MMMM yyyy')}</TableCell>
//               <TableCell>{format(endDate, 'dd MMMM yyyy')}</TableCell>
//               <TableCell>{location}</TableCell>
//               <TableCell>{venue}</TableCell>
//               <TableCell>{availableSeats}</TableCell>
//               <TableCell>on process</TableCell>
//               <TableCell>{isFree}</TableCell>
//               <TableCell>{ticketTypes}</TableCell>
//               <TableCell>{price}</TableCell>
//               <TableCell>Rp. 1.500.000,-</TableCell>
//             </TableRow>
//           </Link>
//         </TableBody>
//       </Table>
//     </section>
//   );
// };

// export default TableEventList;
