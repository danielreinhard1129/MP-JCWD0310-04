'use client';

import { useToast } from '@/components/ui/use-toast';
import { axiosInstance } from '@/lib/axios';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface ForgotPasswordResponse {
  message: string;
}

const useForgotPassword = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const forgotPassword = async (email: string) => {
    try {
      setIsLoading(true);
      const { data } = await axiosInstance.post<ForgotPasswordResponse>(
        '/auth/forgot-password',
        { email },
      );
      toast({
        description: data.message,
      });
      router.replace('/');
    } catch (error) {
      if (error instanceof AxiosError) {
        toast({
          description: error?.response?.data,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };
  return { forgotPassword, isLoading };
};

export default useForgotPassword;
