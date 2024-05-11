'use client';
import SideBar from '@/components/admin/dashboard/SideBar/SideBar';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const EventList = () => {
  return (
    <section>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Event Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Venue</TableHead>
              <TableHead>Available Seat</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>is Free/ not</TableHead>
              <TableHead>Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Java Jazz</TableCell>
              <TableCell>Festival</TableCell>
              <TableCell>11 agustus 2024</TableCell>
              <TableCell>14 agustus 2024</TableCell>
              <TableCell>Jakarta</TableCell>
              <TableCell>Gelora Bung Karno</TableCell>
              <TableCell>1500</TableCell>
              <TableCell>on process</TableCell>
              <TableCell>paid</TableCell>
              <TableCell>Rp. 1.500.000,-</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default EventList;
