import { axiosInstance } from '@/lib/axios';
import { Review } from '@/types/review.type';

import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

const useGetReview = (id: number) => {
  const [data, setData] = useState<Review | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getReview = async () => {
    try {
      const { data } = await axiosInstance.get<Review>(`/events/${id}`);
      setData(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        // ubah ke toast
        console.log(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getReview();
  }, []);
  return { review: data, isLoading, refetch: getReview };
};

export default useGetReview;
