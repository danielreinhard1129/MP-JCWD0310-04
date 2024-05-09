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
    const user = await prisma.user.create({
      data: {
        username,
        email,
        role: 'CUSTOMER',
        password: hashedPassword,
        referral: userReferral,
        points: 0,
      },
    });

    // Jika referral tidak ada, lewati proses dibawah
    if (referral) {
      // Cari user dengan referral yang dimasukkan
      const findUserReferral = await prisma.user.findFirst({
        where: { referral },
      });

      if (!findUserReferral || findUserReferral.role === 'ORGANIZER') {
        throw new Error('Referral not found');
      }

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
    }

    return user;
  } catch (error) {
    throw error;
  }
};
