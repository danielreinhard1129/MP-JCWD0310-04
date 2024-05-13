'use client'

import { axiosInstance } from '@/lib/axios';
import { User } from '@/types/user.type';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

const useGetUser = (id: number) => {
  const [data, setData] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getUser = async () => {
    try {
      const { data } = await axiosInstance.get<User>(`/users/${id}`);
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
    getUser();
  }, []);
  return { user: data, isLoading, refetch: getUser };
};

export default useGetUser;
