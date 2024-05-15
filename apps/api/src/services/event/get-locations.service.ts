import prisma from '@/prisma';
import { Location } from '@prisma/client';

export const getLocationService = async (): Promise<Location[]> => {
  try {
    const locations = await prisma.location.findMany();
    return locations;
  } catch (error) {
    throw new Error('Failed to fetch locations');
  }
};
