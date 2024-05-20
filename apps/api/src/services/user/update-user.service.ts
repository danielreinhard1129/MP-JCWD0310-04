import prisma from "@/prisma"
import { User } from "@prisma/client"



export const updateUserService = async (
    body: Partial<Omit<User, 'id'|'referral'>>,
    id: number
) => {
    try {
        const existingUser = await prisma.user.findFirst({
            where: { id },
        });

        if (!existingUser) {
            throw new Error("User not found")
        }

        const updateUser = await prisma.user.update({
            where: { id },
            data: { ...body }
        });
        return {
            message:
                'Edit profile success',
            data: updateUser
        };

    } catch (error) {
        throw error
    }
}