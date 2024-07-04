import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient;


export const getAll = async () => {
    return await prisma.usuarios.findMany();
   }
   

   export const getOne = async (id) => {
    return await prisma.usuarios.findUnique(
        {
            where:
            {
                id : Number(id)
            }
        });
   }

   export const create = async (usuarios) => {
    return await prisma.usuarios.create({data:usuarios});

   }


   export const update = async (id, usuarios) => {
    return await prisma.usuarios.update(
{
    where:   { id : Number(id)  },
    data: usuarios,
});
}

export const deletar = async (id) => {
    return await prisma.usuarios.delete(
{
    where:   { id : Number(id)  },
});
}