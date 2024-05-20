
import { IFormCreateReview, Review } from '@/types/review.type';

import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

const useCreateReviews = () => {
    // const {id} = useAppSelector((state) => state.user);
    const router = useRouter();
    const createReview = async (payload: IFormCreateReview) => {
        try {
            const {
                userId,
                rating,
                comment,
                createdAt,
                eventId
            } = payload;

            const createReviewForm = new FormData();    

            createReviewForm.append('rating', String(rating));
            createReviewForm.append('comment', comment);
            createReviewForm.append('eventId', String(eventId));
            createReviewForm.append('createdAt', String(new Date()));
            createReviewForm.append('userId', String(userId));


            await axios.post<Review>(`http://localhost:8000/api/reviews/`, payload )
            router.push('/');
        } catch (error) {
            if (error instanceof AxiosError) {
                console.log(error);
            }
        }
    }
  return { createReview }
}

export default useCreateReviews;