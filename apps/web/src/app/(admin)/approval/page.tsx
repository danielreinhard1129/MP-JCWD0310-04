'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const Approval = () => {
  return (
    <section className="container h-screen w-full ">
      <div className="text-4xl font-bold p-5 mt-10">
        <h1>Approval</h1>
      </div>
      <hr className=" border-4 border-gray-700" />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Username</TableHead>
            <TableHead>Transaction Id</TableHead>
            <TableHead>Event Id</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Java Jazz</TableCell>
            <TableCell>Festival</TableCell>
            <TableCell>11 agustus 2024</TableCell>
            <TableCell>14 agustus 2024</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
};

export default Approval;
