import { hashPassword } from '@/lib/bcrypt';
import { generateReferralCode } from '@/lib/referralGenerator';
import prisma from '@/prisma';
import { User } from '@prisma/client';

export const registerService = async (
  body: Pick<User, 'email' | 'username' | 'password' | 'referral'>,
): Promise<User> => {
  try {
    const { email, password } = body;
    const existingUser = await prisma.user.findFirst({
      where: { email },
    });

    if (existingUser) {
      throw new Error('email already exist');
    }

    const referral = generateReferralCode();

    const hashedPassword = await hashPassword(password);

    return await prisma.user.create({
      data: { ...body, password: hashedPassword, referral: referral },
    });
  } catch (error) {
    throw error;
  }
};
