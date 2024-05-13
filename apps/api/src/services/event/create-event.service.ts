import prisma from '@/prisma';
import { Event } from '@prisma/client';

interface CreateEventBody
  extends Omit<Event, 'thumbnail' | 'updatedAt' | 'createdAt'> {
  ticketTypes: string;
  locations: string;
}
export const createEventService = async (
  body: CreateEventBody,
  file: Express.Multer.File,
) => {
  try {
    const {
      // Event
      title,
      organizerId,
      description,
      location,
      venue,
      categoryId,
      availableSeats,
      startDate,
      endDate,
      isFree,
      booked,
      price,
      time,

      // ARRAY
      ticketTypes,
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

    const newEvent = await prisma.$transaction(async (transaction) => {
      const event = await transaction.event.create({
        data: {
          title: String(title),
          description: String(description),
          location: String(location),
          venue: String(venue),
          time: String(time),
          categoryId: Number(categoryId),
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

      await transaction.ticketType.createMany({
        data: JSON.parse(ticketTypes).map((ticketType: any) => ({
          name: String(ticketType.name),
          price: Number(ticketType.price),
          eventId: event.id,
        })),
        skipDuplicates: true,
      });
      return event;
    });

    return newEvent;
  } catch (error) {
    throw error;
  }
};
