import { axiosInstance } from '@/lib/axios';
import { IFormCreateTransaction, Transaction } from '@/types/ts.type';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FileWithPath } from 'react-dropzone';

const useConfirmTransaction = (transactionId: number) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const confirmTransaction = async (
    payload: Partial<IFormCreateTransaction>,
  ) => {
    setIsLoading(true);
    try {
      const { paymentProof } = payload;

      const confirmTransactionForm = new FormData();

      paymentProof?.forEach((file: FileWithPath) => {
        confirmTransactionForm.append('paymentProof', file);
      });
      await axiosInstance.patch<Transaction>(
        `/transaction/${transactionId}`,
        confirmTransactionForm,
      );
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  return { confirmTransaction, isLoading };
};
