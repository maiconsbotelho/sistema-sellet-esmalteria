import { PrismaClient } from "@prisma/client";
import { profissionais, servicos, Usuario } from "@sellet/core";


const prisma = new PrismaClient();

async function seed(){

    await prisma.profissional.createMany({
        data: profissionais as any
    });

    await prisma.servico.createMany({
        data: servicos as any
    });


    // const usuarios: Usuario[] = [
    //     {
    //         nome: "Manicure 1",
    //         email: "mani@gmail.com",
    //         senha: "$2b$10$mi7jbJX76cvOy8Ms1LwJ5uDaiP346f8n2SwgwN43UJfgP2HIZk2Tm",
    //         telefone: "11999999999",
    //         cpf: "12300000000",
    //         manicure: true,
    //     },
    // ];

    // await prisma.usuario.createMany({ data: usuarios as any });

}

seed();