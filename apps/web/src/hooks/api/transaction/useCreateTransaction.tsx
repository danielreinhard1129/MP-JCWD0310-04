'use client';

import { axiosInstance } from '@/lib/axios';
import { Transaction, IFormCreateTransaction } from '@/types/ts.type';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

const useCreateTransaction = () => {
  const router = useRouter();

  const createTransaction = async (payload: IFormCreateTransaction) => {
    try {
      const { qty } = payload;

      const createTransactionForm = new FormData();

      createTransactionForm.append('buyerId', String(qty));
      // createTransactionForm.append('eventId', String(eventId));
      // createTransactionForm.append('ticketTypeId', String(ticketTypeId));
      // createTransactionForm.append('qty', String(qty));
      // createTransactionForm.append('totalAmount', String(totalAmount));
      // createTransactionForm.append('status', status);

      await axiosInstance.post<Transaction>(
        '/transactions',
        createTransactionForm,
      );
      //   toast success here
      router.push('/');
    } catch (error) {
      if (error instanceof AxiosError) {
        // TODO: replace conlole.log woth toast
        console.log(error);

        // FIXME: message
      }
    }
  };
  return { createTransaction };
};

export default useCreateTransaction;
