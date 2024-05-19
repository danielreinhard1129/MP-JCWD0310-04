import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const useUpdateTransactionStatus = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateStatus = async (id: number, status: string) => {
    try {
      setIsLoading(true);
      const response = await axios.patch(
        `http://localhost:8000/api/transactions/${id}/status`,
        { status },
      );
      router.refresh();
      // return response.data.data;
    } catch (error) {
      console.error('Failed to update status:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { updateStatus, isLoading };
};

export default useUpdateTransactionStatus;
