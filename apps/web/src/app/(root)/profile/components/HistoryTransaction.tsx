'use client';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CircleCheck, CircleX } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const HistoryTransaction = () => {
  return (
    <section className="container h-screen w-full ">
      <div className="text-4xl font-bold p-5 mt-10">
        <h1>Transaction History </h1>
      </div>
      <div>
      <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>No.</TableHead>
                  <TableHead>Name User</TableHead>
                  <TableHead>Transaction Id</TableHead>
                  <TableHead>Event Id</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[1, 2, 3].map((id) => (
                  <TableRow key={id}>
                    <TableCell>{id}</TableCell>
                    <TableCell className="font-medium">User Name</TableCell>
                    <TableCell>Transaction</TableCell>
                    <TableCell>Event name</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800 gap-1">
                        <CircleCheck />
                        Finished
                      </Badge>
                      <Badge className="bg-red-300 text-red-800 gap-1">
                        <CircleX />
                        On Going
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
      </div>
    </section>
  );
};

export default HistoryTransaction;
