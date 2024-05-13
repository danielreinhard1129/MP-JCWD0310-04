import { hashPassword } from '@/lib/bcrypt';
import { generateReferralCode } from '@/lib/referralGenerator';
import prisma from '@/prisma';
import { User } from '@prisma/client';

export const registerService = async (
  body: Pick<User, 'email' | 'username' | 'password' | 'referral'>,
): Promise<User> => {
  try {
    const { username, email, password, referral } = body;

    // Cek email sudah terdaftar atau belum
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error('Email already exists');
    }

    // Buat kode referral baru untuk user yang mendaftar
    const userReferral = generateReferralCode();

    // Hash password sebelum simpan
    const hashedPassword = await hashPassword(password);

    // Buat user baru
    const newUser = await prisma.$transaction(async (transaction) => {
      const user = await transaction.user.create({
        data: {
          username,
          email,
          role: 'CUSTOMER',
          password: hashedPassword,
          referral: userReferral,
          points: 0,
        },
      });

      if (!referral) {
        return user;
      } else {
        const findUserReferral = await prisma.user.findFirst({
          where: { referral },
        });

        if (!findUserReferral || findUserReferral.role === 'ORGANIZER') {
          throw new Error('Referral not found');
        }

        if (findUserReferral) {
          // Hitung tanggal 3 bulan dari sekarang
          const currentDate = new Date();
          const threeMonthsLater = new Date(
            currentDate.setMonth(currentDate.getMonth() + 3),
          );
          await transaction.user.update({
            where: { id: findUserReferral.id },
            data: {
              points: {
                increment: 10000, // Tambahkan 10000 poin
              },
              pointsExpired: threeMonthsLater,
            },
          });

          // Buat catatan referralHistory
          await transaction.referralHistory.create({
            data: {
              referrerId: user.id,
              referredId: findUserReferral.id,
              createdAt: new Date(),
            },
          });

          // Buat reward user
          await transaction.reward.create({
            data: {
              userId: user.id,
              title: '10% discount',
              percentage: 10,
              nominal: 2000,
              isUsed: false,
            },
          });
        }
      }
      return user;
    });

    return newUser;
  } catch (error) {
    throw error;
  }
};
