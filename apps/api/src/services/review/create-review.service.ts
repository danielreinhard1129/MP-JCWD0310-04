import prisma from "@/prisma"
import { Review } from "@prisma/client"


interface CreateReviewBody extends Omit<Review, 'id' | 'createdAt'> { }


export const createReviewService = async (
    body: CreateReviewBody,

) => {
    try {

        const {
            eventId,
            userId,
            rating,
            comment,

        } = body

        const existingComment = await prisma.review.findFirst({
            where: { comment },
        });

        if (existingComment) {
            throw new Error('Comment already exist');
        }

        const user = await prisma.user.findFirst({
            where: { id: Number(userId) },
        })

        if (!user) {
            throw new Error('user not found');
        }
        const event = await prisma.event.findFirst({
            where: { id: Number(eventId) },
        })

        if (!event) {
            throw new Error('event not found');
        }


        return await prisma.review.create({
            data: {
                ...body,
                userId: Number(userId),
                eventId: Number(eventId),
                rating: Number(rating),
            }
        })

    } catch (error) {
        throw error
    }
}
