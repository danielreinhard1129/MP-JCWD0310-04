import prisma from "@/prisma";
import { Event } from "@prisma/client";
import { join } from "path";
import fs from "fs";


export const updateEventService = async (
    id: number,
    body: Omit<Event, | "createdAt" | "deletedAt" | "updateAt" | "review" | "transaction" >,
    file: Express.Multer.File
) => {
    try {
        const { title } = body
        const event = await prisma.event.findFirst({
            where: { id },
        });

        if (!event) {
            throw new Error("event not found")
        }

        const existingTitle = await prisma.event.findFirst({
            where: { title },
        })

        if (existingTitle) {
            throw new Error('title is already in use');
        }

        if (file) {
            body.thumbnail = `/images/${file.filename}`;
            const imagePath = join(__dirname, "../../../public" + event.thumbnail,)

            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath)
            }
        }

        return await prisma.event.update({
            where: { id },
            data: { ...body }
        })
    } catch (error) {

        throw (error)
    }
} 