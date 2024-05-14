'use client';

import { useToast } from '@/components/ui/use-toast';
import { axiosInstance } from '@/lib/axios';
import { Event, IFormCreateEvent } from '@/types/event.type';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FileWithPath } from 'react-dropzone';

const useCreateEvent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const { toast } = useToast();
  const createEvent = async (payload: IFormCreateEvent) => {
    setIsLoading(true);
    try {
      const createEventForm = new FormData();
      // console.log(createEvent);

      Object.entries(payload).forEach(([key, value]) => {
        if (key === 'thumbnail') {
          value.forEach((file: FileWithPath) => {
            createEventForm.append(key, file);
          });
        } else if (key === 'ticketTypes') {
          // Append ticketTypes as JSON string
          createEventForm.append(key, JSON.stringify(value));
        } else {
          createEventForm.append(key, String(value));
        }
      });

      await axiosInstance.post<Event>('/events', createEventForm);
      toast({
        description: 'create event success',
      });
      router.push('/dashboard');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return { createEvent, isLoading };
};

export default useCreateEvent;
