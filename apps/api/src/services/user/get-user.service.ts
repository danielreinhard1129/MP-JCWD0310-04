import prisma from '@/prisma';

export const getUserService = async (id: number) => {
  try {
    const user = await prisma.user.findFirst({
      where: { id },
    });

    if (!user) {
      throw new Error('User is not found');
    }

    return user;
  } catch (error) {
    throw error;
  }
};
