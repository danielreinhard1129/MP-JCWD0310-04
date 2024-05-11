'use client';

import { useToast } from '@/components/ui/use-toast';
import { axiosInstance } from '@/lib/axios';
import { Event, IFormCreateEvent } from '@/types/event.type';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { FileWithPath } from 'react-dropzone';

const useCreateEvent = () => {
  const router = useRouter();
  const { toast } = useToast();
  const createEvent = async (payload: IFormCreateEvent) => {
    try {
      const {
        title,
        description,
        location,
        thumbnail,
        category,
        organizerId,
        availableSeats,
        booked,
        price,
        time,
        isFree,
        startDate,
        endDate,
      } = payload;

      const createEventForm = new FormData();

      createEventForm.append('title', title);
      createEventForm.append('description', description);
      createEventForm.append('location', location);
      createEventForm.append('category', category);
      createEventForm.append('organizerId', String(organizerId));
      createEventForm.append('availableSeats', String(availableSeats));
      createEventForm.append('booked', String(booked));
      createEventForm.append('price', String(price));
      createEventForm.append('time', time);
      createEventForm.append('isFree', String(isFree));
      createEventForm.append('startDate', String(startDate));
      createEventForm.append('endDate', String(endDate));

      thumbnail.forEach((file: FileWithPath) => {
        createEventForm.append('thumbnail', file);
      });

      await axiosInstance.post<Event>('/events', createEventForm);
      // toast success here
      toast({
        description: 'create event success',
      });
      router.push('/dashboard');
    } catch (error) {
      if (error instanceof AxiosError) {
        // TODO: replace log with toast
        console.log(error);
      }
    }
  };
  return { createEvent };
};

export default useCreateEvent;
