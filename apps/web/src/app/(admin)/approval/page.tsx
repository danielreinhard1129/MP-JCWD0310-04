'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import useGetTransactions from '@/hooks/api/transaction/useGetTransactions';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { FilePenLine, ImageUp, Loader } from 'lucide-react';
import { appConfig } from '@/utils/config';
import Image from 'next/image';
import useUpdateTransactionStatus from '@/hooks/api/transaction/useUpdateTransactionStatus';
import { useState } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { TransactionStatus } from '@/types/ts.type';
import Pagination from '@/components/Pagination';
import { useFormik } from 'formik';
import { values } from 'lodash';

const Approval = () => {
  const getStatusBadgeClass = (status: any) => {
    switch (status) {
      case 'CANCELLED':
        return 'bg-red-500 text-white';
      case 'SUCCESS':
        return 'bg-green-500 text-white';
      case 'PENDING':
        return 'bg-yellow-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const formatRupiah = (number: any) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(number);
  };

  const { id } = useAppSelector((state) => state.user);
  const [page, setPage] = useState<number>(1);
  const { transactions, meta } = useGetTransactions({
    id: id,
    page,
    take: 5,
    status: TransactionStatus.PENDING,
  });

  const handleChangePaginate = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };
  const { updateStatus, isLoading } = useUpdateTransactionStatus();
  const [transactionId, setTransactionId] = useState<number | null>(null);
  const [status, setStatus] = useState<string>('');

  const handleStatusChange = async (id: number, newStatus: string) => {
    try {
      await updateStatus(id, newStatus);
      // fetch();
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  console.log(status);
  console.log(transactionId);

  let number = 1;
  return (
    <section className="container h-screen w-full ">
      <div className="text-4xl font-bold p-5 mt-10">
        <h1>Transaction and Approval </h1>
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No.</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Invoice</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Event</TableHead>
              <TableHead>Payment Proof</TableHead>
              <TableHead>Status</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell>{number++}</TableCell>
                <TableCell className="font-medium">
                  {transaction.user.username}
                </TableCell>
                <TableCell>{transaction.invoice}</TableCell>
                <TableCell>{formatRupiah(transaction.total)}</TableCell>
                <TableCell>{transaction.event.location}</TableCell>
                <TableCell>
                  <Popover>
                    <PopoverTrigger>
                      <Button variant="secondary">
                        <ImageUp />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 h-80 flex items-center justify-center">
                      {transaction.paymentProof ? (
                        <Image
                          src={`${appConfig.baseURL}/assets${transaction.paymentProof}`}
                          alt="Thumbnail"
                          layout="fill"
                          objectFit="contain"
                        />
                      ) : (
                        <div className="text-center">
                          {transaction.paymentProof}
                        </div>
                      )}
                    </PopoverContent>
                  </Popover>
                </TableCell>
                <TableCell>
                  <Badge className={getStatusBadgeClass(transaction.status)}>
                    {transaction.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Popover>
                    <PopoverTrigger>
                      <Button variant="ghost">
                        <FilePenLine />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[150px]">
                      <div className="flex flex-col justify-center gap-2">
                        <Button
                          disabled={isLoading}
                          className="bg-green-500 hover:bg-green-700 cursor-pointer"
                          onClick={() => {
                            setTransactionId(transaction.id);
                            setStatus('COMPLETE');
                            handleStatusChange(transaction.id, 'COMPLETE');
                          }}
                        >
                          {isLoading && (
                            <Loader className="mr-2 h-4 w-4 animate-spin " />
                          )}{' '}
                          {isLoading ? 'Loading' : 'COMPELETE'}
                        </Button>
                        <Button
                          disabled={isLoading}
                          className="bg-red-500 hover:bg-red-700  cursor-pointer"
                          onClick={() => {
                            setTransactionId(transaction.id);
                            setStatus('CANCELLED');
                            handleStatusChange(transaction.id, 'CANCELLED');
                          }}
                        >
                          {isLoading && (
                            <Loader className="mr-2 h-4 w-4 animate-spin " />
                          )}{' '}
                          {isLoading ? 'Loading' : 'CANCELLED'}
                        </Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mx-auto w-fit">
          <Pagination
            total={meta?.total || 0}
            take={meta?.take || 0}
            onChangePage={handleChangePaginate}
          />
        </div>
      </div>
    </section>
  );
};

export default Approval;
