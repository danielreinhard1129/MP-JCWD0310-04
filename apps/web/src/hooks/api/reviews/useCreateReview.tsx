import { IFormCreateReview, Review } from '@/types/review.type';

import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

const useCreateReview = () => {
  // const { id } = useAppSelector((state) => state.user);
  const router = useRouter();

  const createReview = async (payload: IFormCreateReview) => {
    try {
      const { rating, review, eventId, userId } = payload;

      const createReviewForm = new FormData();

      createReviewForm.append('rating', String(rating));
      createReviewForm.append('review', review);
      createReviewForm.append('eventId', String(eventId));
      createReviewForm.append('userId', String(userId));

      await axios.post<Review>('http://localhost:8000/api/reviews', payload);
      router.push(`/${eventId}`);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }
    }
  };
  return { createReview };
};

export default useCreateReview;
