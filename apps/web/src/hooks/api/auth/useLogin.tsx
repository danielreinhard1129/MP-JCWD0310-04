'use client';

import { axiosInstance } from '@/lib/axios';
import { useAppDispatch } from '@/redux/hooks';
import { loginAction } from '@/redux/slices/userSlice';
import { User } from '@/types/user.type';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';

interface LoginArgs extends Omit<User, 'id' | 'username' | 'role'> {
  password: string;
}

interface LoginResponse {
  message: string;
  data: User;
  token: string;
}

const useLogin = () => {
  const { toast } = useToast();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const login = async (payload: LoginArgs) => {
    try {
      const { data } = await axiosInstance.post<LoginResponse>(
        '/auth/login',
        payload,
      );

      dispatch(loginAction(data.data));
      localStorage.setItem('token', data.token);
      toast({
        description: 'login success',
      });
      if (data.data.role === 'ORGANIZER') {
        router.replace('/dashboard');
      } else {
        router.replace('/');
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast({
          description: error?.response?.data,
        });
      }
    }
  };
  return { login };
};

export default useLogin;
