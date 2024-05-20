/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import Pagination from '@/components/Pagination';
import TableTransactions from '@/components/TableTransactions';
import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AuthGuardAdmin from '@/hoc/AuthGuard';
import useGetTransactions from '@/hooks/api/tx/useGetTransactions';
import { useAppSelector } from '@/redux/hooks';
import { TransactionStatus } from '@/types/transaction.type';
import { useState } from 'react';

const page = () => {
  const { id } = useAppSelector((state) => state.user);
  const [page, setPage] = useState<number>(1);
  const { data: transactions, meta } = useGetTransactions({
    id: id,
    page,
    take: 5,
    status: TransactionStatus.PENDING,
  });

  const handleChangePaginate = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  return (
    <section className="container h-screen w-full ">
      <div className="text-4xl font-bold p-5 mt-10">
        <h1>Transactions And Approve</h1>
      </div>
      <Tabs defaultValue="account" className="w-full">
        <TabsList>
          <TabsTrigger value="history">Transaction List</TabsTrigger>
          <TabsTrigger value="pending">Need approval</TabsTrigger>
        </TabsList>
        <TabsContent value="pending">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="history" className="">
          {/*TABLE*/}
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader className="">
              <TableRow>
                <TableHead className="">Invoice</TableHead>
                <TableHead>Event Title</TableHead>
                <TableHead>Buyer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead className="">Status</TableHead>
              </TableRow>
            </TableHeader>
            {transactions.map((transaction, key) => {
              return (
                <TableTransactions
                  key={key}
                  invoice={transaction.invoice}
                  createdAt={new Date()}
                  status={String(transaction.status)}
                  total={transaction.total}
                  transactionId={transaction.id}
                  userId={transaction.userId}
                  eventId={transaction.eventId}
                  eventTitle={transaction.event.title}
                  userName={transaction.user.username}
                  qty={transaction.qty}
                />
              );
            })}
          </Table>
          <div className="mx-auto w-fit">
            <Pagination
              total={meta?.total || 0}
              take={meta?.take || 0}
              onChangePage={handleChangePaginate}
            />
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default AuthGuardAdmin(page);
