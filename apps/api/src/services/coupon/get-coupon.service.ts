import prisma from '@/prisma';

export const getCouponService = async (id: number) => {
  try {
    const reward = await prisma.coupon.findFirst({
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
