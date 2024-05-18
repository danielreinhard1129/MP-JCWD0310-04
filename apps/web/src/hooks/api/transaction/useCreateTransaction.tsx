'use client';

import { useToast } from '@/components/ui/use-toast';
import { axiosInstance } from '@/lib/axios';
import { Transaction, IFormCreateTransaction } from '@/types/ts.type';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const useCreateTransaction = () => {
  const [isLoadinger, setIsLoadinger] = useState<boolean>(false);
  const router = useRouter();
  const { toast } = useToast();

  const createTransaction = async (payload: IFormCreateTransaction) => {
    setIsLoadinger(true);
    try {
      const { qty, userId, eventId, total } = payload;

      const createTransactionForm = new FormData();

      createTransactionForm.append('userId', String(userId));
      createTransactionForm.append('eventId', String(eventId));
      createTransactionForm.append('qty', String(qty));
      createTransactionForm.append('total', String(total));

      await axios.post<Transaction>(
        'http://localhost:8000/api/transactions',
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
    } finally {
      setIsLoadinger(false);
    }
  };
  return { createTransaction, isLoadinger };
};

export default useCreateTransaction;
