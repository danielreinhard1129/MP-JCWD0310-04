import { Review } from '@/types/review.type';
import { axiosInstance } from '@/lib/axios';
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

const useGetReviewByEvent = (id: number) => {
  const [data, setData] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getReviewByEvent = async () => {
    try {
      const { data } = await axios.get<Review[]>(`http://localhost:8000/api/reviews/events/${id}`);
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
    getReviewByEvent();
  }, []);
  return { data, isLoading, refetch: getReviewByEvent };
};

export default useGetReviewByEvent;
