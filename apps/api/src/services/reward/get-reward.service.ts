import prisma from '@/prisma';

export const getRewardService = async (id: number) => {
  try {
    const reward = await prisma.reward.findFirst({
      where: { userId: id },
      include: {
        user: true,
      },
    });

    return reward;
  } catch (error) {
    throw error;
  }
};
