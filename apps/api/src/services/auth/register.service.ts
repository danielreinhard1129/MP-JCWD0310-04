import { hashPassword } from '@/lib/bcrypt';
import { generateReferralCode } from '@/lib/referralGenerator';
import prisma from '@/prisma';
import { User } from '@prisma/client';
import { addMonths } from 'date-fns';

export const registerService = async (body: Omit<User, 'id'>) => {
  try {
    const { username, email, password, referral } = body;

    // Cek email sudah terdaftar atau belum
    const existingUser = await prisma.user.findFirst({
      where: { email },
    });

    if (existingUser) {
      throw new Error('Email already exists');
    }

    // Hash password sebelum simpan
    const hashedPassword = await hashPassword(password);

    // Buat kode referral baru untuk user yang mendaftar
    const userReferral = generateReferralCode();

    // Buat user baru
    const newUser = await prisma.user.create({
      data: {
        ...body,
        password: hashedPassword,
        referral: userReferral,
        points: 0,
        pointsExpired: new Date(),
      },
    });

    const userCoupon = String(
      newUser.username.substring(0, 3) + Math.ceil(Math.random() * 1000),
    ).toUpperCase();

    if (referral) {
      const referredUser = await prisma.user.findFirst({
        where: { referral: referral },
      });

      if (!referredUser) {
        throw new Error('Invalid referral code');
      }

      const today = new Date();
      const expiredDate = addMonths(today, 3).toISOString();

      await prisma.user.update({
        where: { id: referredUser.id },
        data: {
          points: { increment: 10000 },
          pointsExpired: expiredDate,
        },
      });

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
          expirationDate: expiredDate,
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
