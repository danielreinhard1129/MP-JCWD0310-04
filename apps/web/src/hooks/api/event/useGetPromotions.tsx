'use client';

import { axiosInstance } from '@/lib/axios';
import { Event, Promotion } from '@/types/event.type';

import { useEffect, useState } from 'react';

const useGetPromotions = () => {
  const [data, setData] = useState<Promotion[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getPromotions = async () => {
    try {
      const { data } = await axiosInstance.get('/promotions', {});

      setData(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPromotions();
  }, []);

  return { data, isLoading };
};

export default useGetPromotions;
