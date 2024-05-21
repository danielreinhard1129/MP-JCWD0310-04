import prisma from '@/prisma';

export const getReviewService = async (id: number) => {
  try {
    const review = await prisma.review.findFirst({
      where: { eventId: id },
      include: { user: true, event: true },
    });

    if (!review) {
      throw new Error('review is not found');
    }

    return review;
  } catch (error) {
    throw error;
  }
};
