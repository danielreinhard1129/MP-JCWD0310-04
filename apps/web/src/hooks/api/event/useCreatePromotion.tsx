'use client';

import { useToast } from '@/components/ui/use-toast';
import { axiosInstance } from '@/lib/axios';
import { IFormCreatePromotion, Promotion } from '@/types/event.type';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { FileWithPath } from 'react-dropzone';

const useCreatePromotion = () => {
  const router = useRouter();
  const { toast } = useToast();
  const createPromotion = async (payload: IFormCreatePromotion) => {
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
        voucher,
      } = payload;

      const createPromotionForm = new FormData();

      createPromotionForm.append('title', title);
      createPromotionForm.append('description', description);
      createPromotionForm.append('location', location);
      createPromotionForm.append('category', category);
      createPromotionForm.append('organizerId', String(organizerId));
      createPromotionForm.append('availableSeats', String(availableSeats));
      createPromotionForm.append('booked', String(booked));
      createPromotionForm.append('price', String(price));
      createPromotionForm.append('time', time);
      createPromotionForm.append('isFree', String(isFree));
      createPromotionForm.append('startDate', String(startDate));
      createPromotionForm.append('endDate', String(endDate));
      createPromotionForm.append('voucher', voucher);

      thumbnail.forEach((file: FileWithPath) => {
        createPromotionForm.append('thumbnail', file);
      });

      await axiosInstance.post<Promotion>('/promotions', createPromotionForm);
      // toast success here
      toast({
        description: 'create promotion success',
      });
      router.push('/dashboard');
    } catch (error) {
      if (error instanceof AxiosError) {
        // TODO: replace log with toast
        console.log(error);
      }
    }
  };
  return { createPromotion };
};

export default useCreatePromotion;
