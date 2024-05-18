import prisma from '@/prisma';
import { Event } from '@prisma/client';

interface CreateEventBody
  extends Omit<Event, 'thumbnail' | 'updatedAt' | 'createdAt'> {
  // isFree: string;
}
export const createEventService = async (
  body: CreateEventBody,
  file: Express.Multer.File,
) => {
  try {
    const {
      // Event
      title,
      description,
      location,
      address,
      category,
      availableSeats,
      startDate,
      endDate,
      // isFree,
      price,
      booked,
      organizerId,
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

    // const isFreeValue = isFree === 'true';

    const event = await prisma.event.create({
      data: {
        title: String(title),
        description: String(description),
        location: String(location),
        address: String(address),
        category: String(category),
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        // isFree: isFreeValue,
        booked: 0,
        price: Number(price),
        availableSeats: Number(availableSeats),
        thumbnail: `/images/${file.filename}`,
        organizerId: Number(organizerId),
      },
    });

    // Check if event is free
    // if (!isFreeValue) {
    //   await prisma.ticketType.createMany({
    //     data: JSON.parse(ticketTypes).map((ticketType: any) => ({
    //       name: String(ticketType.name),
    //       price: Number(ticketType.price),
    //       limit: Number(ticketType.limit),
    //       eventId: event.id,
    //     })),
    //     skipDuplicates: true,
    //   });
    // if (!isFreeValue) {
    //   await prisma.ticketType.createMany({
    //     data: JSON.parse(ticketTypes).map((ticketType: any) => ({
    //       name: String(ticketType.name),
    //       price: Number(ticketType.price),
    //       limit: Number(ticketType.limit),
    //       eventId: event.id,
    //     })),
    //     skipDuplicates: true,
    //   });

    //   await prisma.voucher.create({
    //     data: {
    //       voucher: String(voucherName),
    //       price: Number(voucherPrice),
    //       limit: Number(voucherLimit),
    //       isUsed: false,
    //       organizerId: Number(organizerId),
    //       eventId: event.id,
    //     },
    //   });
    // }
    //   await prisma.voucher.create({
    //     data: {
    //       voucher: String(voucherName),
    //       price: Number(voucherPrice),
    //       limit: Number(voucherLimit),
    //       isUsed: false,
    //       organizerId: Number(organizerId),
    //       eventId: event.id,
    //     },
    //   });
    // }

    return event;
  } catch (error) {
    throw error;
  }
};
