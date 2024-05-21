/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import useGetTransactions from '@/hooks/api/tx/useGetTransactions';
import useUpdateTransactionStatus from '@/hooks/api/tx/useUpdateTransactionStatus';
import { useAppSelector } from '@/redux/hooks';
import { appConfig } from '@/utils/config';
import { ImageUp } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const Approval = () => {
  const { id } = useAppSelector((state) => state.user);
  // const [page, setPage] = useState<number>(1);
  const { updateStatus } = useUpdateTransactionStatus();
  const {
    data: transactions,
    meta,
    refetch,
  } = useGetTransactions({
    id,
    // page,
    // take: 5,
  });

  // const handleChangePaginate = ({ selected }: { selected: number }) => {
  //   setPage(selected + 1);
  // };

  return (
    <section className="container h-screen w-full">
      <div className="text-4xl font-bold p-5 mt-10">
        <h1>Transactions And Approve</h1>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Event Title</TableHead>
            <TableHead>Buyer</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Qty</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="text-right">Status</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction, index) => (
            <TableRow key={transaction.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{transaction.invoice}</TableCell>
              <TableCell>{transaction.event.title}</TableCell>
              <TableCell>{transaction.user.username}</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button variant="secondary">
                      <ImageUp />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80 h-80">
                    <Image
                      src={`${appConfig.baseURL}/assets${transaction.paymentProof}`}
                      alt="Thumbnail"
                      style={{ objectFit: 'contain' }}
                      fill
                    />
                  </PopoverContent>
                </Popover>
              </TableCell>
              <TableCell>{transaction.qty}</TableCell>
              <TableCell>{transaction.total}</TableCell>
              <TableCell className="text-right">{transaction.status}</TableCell>
              <TableCell className="text-right">
                <Popover>
                  <PopoverTrigger>...</PopoverTrigger>
                  <PopoverContent className="flex flex-col w-[100px] gap-2">
                    <Button
                      onClick={async () => {
                        await updateStatus(transaction.id, 'COMPLETE');
                        refetch();
                      }}
                    >
                      COMPLETE
                    </Button>
                    <Button
                      onClick={async () => {
                        await updateStatus(transaction.id, 'CANCEL');
                        refetch();
                      }}
                    >
                      CANCEL
                    </Button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default Approval;
