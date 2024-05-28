/*
  Warnings:

  - You are about to drop the column `endedAt` on the `Consultation` table. All the data in the column will be lost.
  - You are about to drop the column `startedAt` on the `Consultation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Consultation" DROP COLUMN "endedAt",
DROP COLUMN "startedAt",
ADD COLUMN     "endAt" TIMESTAMP(3),
ADD COLUMN     "startAt" TIMESTAMP(3);
