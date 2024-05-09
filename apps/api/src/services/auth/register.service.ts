import { hashPassword } from '@/lib/bcrypt';
import { generateReferralCode } from '@/lib/referralGenerator';
import prisma from '@/prisma';
import { User } from '@prisma/client';

export const registerService = async (
  body: Pick<User, 'email' | 'username' | 'password' | 'referral' | 'role'>,
): Promise<User> => {
  try {
    const { email, password, referral } = body;

    // Cek email sudah terdaftar atau belum
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error('Email already exists');
    }

    // Cari user dengan referral yang diberikan
    const findUserReferral = await prisma.user.findUnique({
      where: { referral },
    });

    if (!findUserReferral || findUserReferral.role === 'ORGANIZER') {
      throw new Error('Referral not found');
    }

    // Buat kode referral baru untuk user yang mendaftar
    const userReferral = generateReferralCode();

    // Hash password sebelum simpan
    const hashedPassword = await hashPassword(password);

    // Buat user baru
    const user = await prisma.user.create({
      data: { ...body, password: hashedPassword, referral: userReferral },
    });

    // Jika pengguna dengan referral ditemukan, tambahkan poin pada pengguna yang merujuk
    if (findUserReferral) {
      // Hitung tanggal 3 bulan dari sekarang
      const currentDate = new Date();
      const threeMonthsLater = new Date(
        currentDate.setMonth(currentDate.getMonth() + 3),
      );
      await prisma.user.update({
        where: { id: findUserReferral.id },
        data: {
          points: {
            increment: 10000, // Tambahkan 10000 poin
          },
          pointsExpired: threeMonthsLater,
        },
      });

      // Buat catatan referralHistory
      await prisma.referralHistory.create({
        data: {
          referrerId: user.id,
          referredId: findUserReferral.id,
          createdAt: new Date(),
        },
      });
    }

    return user;
  } catch (error) {
    throw error;
  }
};
