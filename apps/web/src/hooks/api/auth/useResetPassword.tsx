'use client';

import { useToast } from '@/components/ui/use-toast';
import { axiosWithoutToken } from '@/lib/axios';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface ResetPasswordResponse {
  message: string;
}

const useResetPassword = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const resetPassword = async (password: string, token: string) => {
    try {
      setIsLoading(true);
      const { data } = await axiosWithoutToken.patch<ResetPasswordResponse>(
        '/auth/reset-password',
        { password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      toast({
        description: data.message,
      });
      router.replace('/');
    } catch (error) {
      if (error instanceof AxiosError) {
        toast({
          description: error?.response?.data || 'An error occurred',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };
  return { resetPassword, isLoading };
};

export default useResetPassword;
