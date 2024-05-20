import prisma from '@/prisma';

// interface CreateReviewBody extends Omit <Review, 'id' > {}

export const createReviewService = async (body: any) => {
  try {
    const { eventId, userId, rating, comment, createdAt } = body;
    const user = await prisma.user.findFirst({
      where: { id: userId },
    });

    if (!user) {
      throw new Error('user not found');
    }

    const newReview = await prisma.review.create({
      data: {
        userId: Number(userId),
        eventId: Number(eventId),
        rating: Number(rating),
        comment: String(comment),
        createdAt: new Date(),
      },
    });
    return {
      data: newReview,
    };
  } catch (error) {
    throw error;
  }
};
