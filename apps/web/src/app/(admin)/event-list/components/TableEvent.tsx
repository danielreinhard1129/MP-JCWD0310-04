'use client';
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableHead,
    TableRow,
  } from '@/components/ui/table';

const TableEvent = () => {
 
  return (
    <section className="container h-screen w-full ">
      <div className="text-4xl font-bold p-5 mt-10">
        <h1>Event List of Organizer </h1>
      </div>
    <div>
    <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event Name</TableHead>
                <TableHead>Thumbnail</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Venue</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Start Time</TableHead>
                <TableHead>Available Seats</TableHead>
                <TableHead>Booked</TableHead>
                <TableHead>Ticket Types</TableHead>
                <TableHead>Free Event</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Java Jazz</TableCell>
                <TableCell>Festival</TableCell>
                <TableCell>11 August 2024</TableCell>
                <TableCell>14 August 2024</TableCell>
                <TableCell>Festival</TableCell>
                <TableCell>11 August 2024</TableCell>
                <TableCell>14 August 2024</TableCell>
                <TableCell>19:00</TableCell>
                <TableCell>100</TableCell>
                <TableCell>80</TableCell>
                <TableCell>VIP, Regular</TableCell>
                <TableCell>No</TableCell>
              </TableRow>
            </TableBody>
          </Table>
    </div>
    </section>
  );
};

export default TableEvent;
