import prisma from '@/prisma';
import { Event } from '@prisma/client';

interface CreateEventBody
  extends Omit<Event, 'id' | 'thumbnail' | 'updatedAt'> {}
export const createEventService = async (
  body: CreateEventBody,
  file: Express.Multer.File,
) => {
  try {
    const {
      title,
      organizerId,
      booked,
      price,
      availableSeats,
      isFree,
      startDate,
      endDate,
    } = body;

    const existingTitle = await prisma.event.findFirst({
      where: { title },
    });

    if (existingTitle) {
      throw new Error('Title already in use');
    }
    const user = await prisma.user.findFirst({
      where: { id: Number(organizerId) },
    });

    if (!user) {
      throw new Error('organizer not found');
    }

    return await prisma.event.create({
      data: {
        ...body,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        isFree: Boolean(isFree),
        booked: Number(booked),
        price: Number(price),
        availableSeats: Number(availableSeats),
        thumbnail: `/images/${file.filename}`,
        organizerId: Number(organizerId),
      },
    });
  } catch (error) {
    throw error;
  }
};
