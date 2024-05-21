import { hashPassword } from '@/lib/bcrypt';
import prisma from '@/prisma';
import { User } from '@prisma/client';
import { addMonths } from 'date-fns';

export const registerService = async (body: Omit<User, 'id'>) => {
  try {
    const { username, email, password, referralCode } = body;

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existingUser) {
      if (existingUser.email === email) {
        throw new Error('Email already exists!');
      } else if (existingUser.username === username) {
        throw new Error('Username already exists!');
      }
    }

    if (referralCode) {
      const referral = await prisma.user.findFirst({
        where: { referralCode },
      });

      if (!referral || referral.role === 'ORGANIZER') {
        throw new Error('Invalid referral code');
      }

      const today = new Date();
      const expiredDate = addMonths(today, 3).toISOString();

      await prisma.user.update({
        where: { id: referral.id },
        data: {
          point: { increment: 10000 },
          pointExpiredDate: expiredDate,
        },
      });
    }

    const hashedPassword = await hashPassword(password);
    const GeneratereferralCode = Math.random().toString(36).substring(2, 7);

    const newUser = await prisma.user.create({
      data: {
        ...body,
        password: hashedPassword,
        referralCode: GeneratereferralCode,
        point: 0,
        pointExpiredDate: new Date(),
      },
    });

    const userCoupon = String(
      newUser.username.substring(0, 3) + Math.ceil(Math.random() * 1000),
    ).toUpperCase();

    if (referralCode) {
      await prisma.user.update({
        where: { id: newUser.id },
        data: {
          userReward: true,
        },
      });

      await prisma.coupon.create({
        data: {
          isUse: false,
          code: userCoupon,
          discountAmount: 10000,
          expirationDate: addMonths(new Date(), 3).toISOString(),
          userId: newUser.id,
        },
      });
    }

    return {
      message: 'Register success!',
      data: newUser,
    };
  } catch (error) {
    throw error;
  }
};
