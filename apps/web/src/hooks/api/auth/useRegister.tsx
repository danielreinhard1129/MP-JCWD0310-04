'use client';

import { useToast } from '@/components/ui/use-toast';
import { axiosInstance } from '@/lib/axios';
import { User } from '@/types/user.type';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

interface RegisterArgs extends Omit<User, 'id'> {
  password: string;
  referral: string;
}

const useRegister = () => {
  const { toast } = useToast();
  const router = useRouter();
  const register = async (payload: Omit<User, 'id'>) => {
    try {
      await axiosInstance.post<RegisterArgs>('/auth/register', payload);

      toast({
        description: 'Register successfully',
      });
      router.push('/login');
    } catch (error) {
      if (error instanceof AxiosError) {
        toast({
          description: error?.response?.data,
        });
      }
    }
  };

  return { register };
};
export default useRegister;
