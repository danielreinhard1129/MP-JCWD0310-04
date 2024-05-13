import prisma from '@/prisma';

export const getReviewsService = async () => {
  try {



    const reviews = await prisma.review.findMany(
      // where: { eventId: id },
      // include: { event: true },
    );
    
    return reviews;

  } catch (error) {
    throw error;
  }
};
