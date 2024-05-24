-- CreateEnum
CREATE TYPE "AREAS_OF_EXPERTISE" AS ENUM ('AI', 'WEB', 'MOBILE');

-- CreateEnum
CREATE TYPE "CONSULTATION_MODE" AS ENUM ('TEXT', 'IN_PERSON', 'VIDEO');

-- CreateEnum
CREATE TYPE "CONSULTATION_STATUS" AS ENUM ('REQUESTED', 'ACCEPTED', 'STARTED', 'ENDED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isOpenToConsult" BOOLEAN NOT NULL,
    "areas" "AREAS_OF_EXPERTISE" NOT NULL DEFAULT 'WEB',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consultation" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "consultantId" TEXT NOT NULL,
    "consulteeId" TEXT NOT NULL,
    "area" "AREAS_OF_EXPERTISE" NOT NULL,
    "mode" "CONSULTATION_MODE" NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "endedAt" TIMESTAMP(3) NOT NULL,
    "charges" DOUBLE PRECISION NOT NULL,
    "status" "CONSULTATION_STATUS" NOT NULL,

    CONSTRAINT "Consultation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_consultantId_fkey" FOREIGN KEY ("consultantId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_consulteeId_fkey" FOREIGN KEY ("consulteeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
