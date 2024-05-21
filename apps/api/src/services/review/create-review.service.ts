import prisma from '@/prisma';
import { Review } from '@prisma/client';

interface CreateReviewBody
  extends Omit<Review, 'id' | 'updatedAt' | 'createdAt'> { }


  export const createReviewService = async (body: CreateReviewBody) => {
    try {
      const { eventId, userId, rating, review } = body;

      const user = await prisma.user.findFirst({
        where: { id: userId },
      });

      if (!user) {
        throw new Error('user not found');
      }

      const reviewByUser = await prisma.review.findFirst({
        where: {
          userId: userId,
          eventId: eventId,
        },
        include: { event: true },
      });

      if (reviewByUser) {
        throw new Error('user already make review');
      } else {
        const newReview = await prisma.review.create({
          data: {
            userId: Number(userId),
            eventId: Number(eventId),
            rating: Number(rating),
            review: String(review),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        });
        return { data: newReview };
      }
    } catch (error) {
      throw error;
    }
  };

