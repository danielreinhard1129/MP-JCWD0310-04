import { axiosInstance } from '@/lib/axios';
import { IFormCreateEvent } from '@/types/event.type';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FileWithPath } from 'react-dropzone';

const useUpdateEvent = (eventId: number) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateEvent = async (payload: Partial<IFormCreateEvent>) => {
    setIsLoading(true);
    try {
      const {
        address,
        category,
        description,
        endDate,
        availableSeats,
        location,
        price,
        startDate,
        thumbnail,
        title,
      } = payload;

      const eventUpdateForm = new FormData();

      if (title) eventUpdateForm.append('title', title);
      if (address) eventUpdateForm.append('address', address);
      if (category) eventUpdateForm.append('category', category);
      if (description) eventUpdateForm.append('description', description);
      if (location) eventUpdateForm.append('location', location);
      if (price) eventUpdateForm.append('price', String(price));
      if (availableSeats)
        eventUpdateForm.append('limit', String(availableSeats));
      if (startDate) eventUpdateForm.append('start_date', String(startDate));
      if (endDate) eventUpdateForm.append('end_date', String(endDate));
      if (thumbnail)
        thumbnail.forEach((file: FileWithPath) => {
          eventUpdateForm.append('thumbnail', file);
        });
      await axiosInstance.patch(`/events/${eventId}`, eventUpdateForm);
      router.push('/event-list');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return { updateEvent, isLoading };
};

export default useUpdateEvent;
