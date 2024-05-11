'use client';

import { axiosInstance } from '@/lib/axios';
import { Event } from '@/types/event.type';

import { useEffect, useState } from 'react';



const useGetPromotions = () => {
  const [data, setData] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getPromotions = async () => {
    try {
      const { data } = await axiosInstance.get('/events', {
        
      });

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
