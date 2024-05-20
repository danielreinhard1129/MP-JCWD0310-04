import prisma from '@/prisma';
import { Prisma } from '@prisma/client';


export const getCategoryService = async (category:string) => {
    try {
        const whereClause: Prisma.EventWhereInput={};
       
        if(category){
            whereClause.category={

                contains:String(category)
            }
        }
        const result = await prisma.event.findMany({
            where: whereClause,
        });

        if(!result) throw new Error("Category by params not found!");
        return result;
    } catch (error) {
        throw new Error('Failed to fetch categories');
    }
};
