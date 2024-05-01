export const generateReferralCode = (): string => {
  // Logika untuk menghasilkan kode referral
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const codeLength = 8;
  let referralCode = '';

  for (let i = 0; i < codeLength; i++) {
    referralCode += characters.charAt(
      Math.floor(Math.random() * characters.length),
    );
  }

  return referralCode;
};
