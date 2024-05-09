import prisma from "@/prisma";
import { Event } from "@prisma/client";


interface CreateEventBody extends Omit<Event, 'id' | 'createdAt'> { }
export const createEventService = async (

    body: CreateEventBody,
    file: Express.Multer.File
) => {

    try {
        const { title, organizerId } = body;

        const existingTitle = await prisma.event.findFirst({
            where: { title },
        });

        if (existingTitle) {
            throw new Error('Title already in use');
        };
        const organizer = await prisma.user.findFirst({
            where: { id: Number(organizerId) },
        });

        if (!organizer) {
            throw new Error('organizer not found');
        }

        return await prisma.event.create({
            data: {
                ...body,
                imageUrl: `/images/${file.filename}`,
                organizerId: Number(organizerId),
            }
        })

    } catch (error) {
        throw error;
    }
}