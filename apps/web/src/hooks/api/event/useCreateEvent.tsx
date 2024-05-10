'use client';

import { axiosInstance } from '@/lib/axios';
import { Event, IFormCreateEvent } from '@/types/event.type';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { FileWithPath } from 'react-dropzone';

const useCreateEvent = () => {
  const router = useRouter();
  const createEvent = async (payload: IFormCreateEvent) => {
    try {
      const { title,description,location, availableSeats,booked,image,startDate,endDate,price,time,isFree, category, organizerId } =
        payload;

      const createEventForm = new FormData();

      for (const [key, value] of Object.entries(payload)) {
        console.log('key', key);
        console.log('value', value);
      }

      createEventForm.append('title', title);
      createEventForm.append('description', description);
      createEventForm.append('location', location);
      createEventForm.append('availableSeats', JSON.stringify(availableSeats),);
      createEventForm.append('booked', JSON.stringify(booked));
      createEventForm.append('image', JSON.stringify(image));
      createEventForm.append('startDate', startDate.toUTCString());
      createEventForm.append('endDate', endDate.toUTCString());
      createEventForm.append('price', JSON.stringify(price));
      createEventForm.append('time', time.toTimeString());
      createEventForm.append('isFree', JSON.stringify(isFree));
      createEventForm.append('category', category);
      createEventForm.append('organizerId', String(organizerId));

      image.forEach((file: FileWithPath) => {
        createEventForm.append('image', file);
      });

      await axiosInstance.post<Event>('/events', createEventForm);
      // toast success here 👇👇👇
      router.push('/');
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
