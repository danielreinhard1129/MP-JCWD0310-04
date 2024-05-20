import prisma from '@/prisma';

export const getReviewsService = async () => {
  try {



    const reviews = await prisma.review.findMany(
      
    );
    
    return reviews;

  } catch (error) {
    throw error;
  }
};
