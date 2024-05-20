import prisma from '@/prisma';
import { Prisma } from '@prisma/client';


export const getLocationService = async (location:string) => {
    try {
        const whereClause: Prisma.EventWhereInput={};
       
        if(location){
            whereClause.location={

                contains:location,
                
            }
        }
        const result = await prisma.event.findMany({
            where: whereClause,

        });
        if(!result||  result.length === 0) throw new Error("Location by params not found!")
        return result;
    } catch (error) {
        throw new Error('Failed to fetch location');
    }
};
