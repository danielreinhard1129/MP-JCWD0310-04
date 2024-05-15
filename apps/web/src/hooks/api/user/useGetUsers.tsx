import { Category } from '@/types/location.type';
import { User } from '@/types/user.type';
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

const useGetUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    try {
      const { data } = await axios.get<User[]>(
        'http://localhost:8000/api/profile/users',
      );
      setUsers(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        // ubah ke toast
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return {
    users,
    refetch: getUsers,
  };
};

export default useGetUsers;
