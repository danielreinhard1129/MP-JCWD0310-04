'use client';

import { axiosInstance } from '@/lib/axios';
import { Event } from '@/types/event.type';
import { IPaginationMeta, IPaginationQueries } from '@/types/pagination.type';
import { useEffect, useState } from 'react';

interface IGetEventsQuery extends IPaginationQueries {
  search?: string;
}

const useGetEvents = (queries: IGetEventsQuery) => {
  const [data, setData] = useState<Event[]>([]);
  const [meta, setMeta] = useState<IPaginationMeta | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getBlogs = async () => {
    try {
      const { data } = await axiosInstance.get('/events', {
        params: queries,
      });

      setData(data.data);
      setMeta(data.meta);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, [queries?.page, queries?.search]);

  return { data, meta, isLoading };
};

export default useGetEvents;