import prisma from '@/prisma';

export const getEventService = async (id: number) => {
  try {
    const event = await prisma.event.findFirst({
      where: { id: id },
      include: {
        organizer: true,


      },
    });

    if (!event) {
      throw new Error('Event is not found');
    }

    return event;
  } catch (error) {
    throw error;
  }
};
