/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `profissionais` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cpf` to the `profissionais` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "profissionais" ADD COLUMN     "cpf" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "profissionais_cpf_key" ON "profissionais"("cpf");
