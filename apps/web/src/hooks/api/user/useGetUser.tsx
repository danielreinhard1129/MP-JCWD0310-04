'use client';

import { User } from '@/types/user.type';
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

const useGetUser = (id: number) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getUser = async () => {
    try {
      const { data } = await axios.get<User>(
        `http://localhost:8000/api/users/${id}`,
      );
      setUser(data);
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
  }, [id]);
  return { user, isLoading, refetch: getUser };
};

export default useGetUser;
