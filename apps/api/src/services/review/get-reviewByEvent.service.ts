import prisma from '@/prisma';

export const getReviewByEventService = async (id: number) => {
  try {
    const review = await prisma.review.findMany({
      where: { eventId: id },
      include: { user: true, event: true },
    });

    if (!review) {
      throw new Error('review is not found in this event');
    }

    return review;
  } catch (error) {
    throw error;
  }
};
