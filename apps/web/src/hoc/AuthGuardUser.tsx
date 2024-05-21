'use client';

import { useToast } from '@/components/ui/use-toast';
import { useAppSelector } from '@/redux/hooks';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AuthGuard(Component: any) {
  return function IsAuth(props: any) {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(true);

    const { role } = useAppSelector((state) => state.user);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, []);

    useEffect(() => {
      if (role === 'ORGANIZER' && !isLoading) {
        toast({
          description: 'you must login as an event customer',
        });
        redirect('/dashboard');
      }
    }, [role, isLoading]);

    return <Component {...props} />;
  };
}
