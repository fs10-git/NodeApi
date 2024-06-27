import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient;

export const getAll = async () => {
 return await prisma.produtos.findMany();
}

export const getOne = async (id) => {
    return await prisma.produtos.findUnique(
        {
            where:
            {
                id : Number(id)
            }
        });
   }


   export const create = async (produto) => {
    return await prisma.produtos.create({data:produto});
   }