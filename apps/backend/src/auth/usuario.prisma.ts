import { Injectable } from '@nestjs/common';
import { RepositorioUsuario, Usuario } from '@sellet/core';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class UsuarioPrisma implements RepositorioUsuario {
  constructor(private readonly prisma: PrismaService) {}

  async salvar(usuario: Usuario): Promise<void> {
    await this.prisma.usuario.upsert({
      where: { id: usuario.id ?? -1 },
      update: usuario,
      create: usuario as any,
    });
  }

  async buscarPorEmail(email: string): Promise<Usuario | null> {
    if (!email) {
    throw new Error("Email não fornecido");
  }

  return this.prisma.usuario.findUnique({
    where: {
      email: email,
    },
  });
  }
}
