/*
  Warnings:

  - The `areas` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `area` on the `Consultation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "AREA_OF_EXPERTISE" AS ENUM ('AI', 'WEB', 'MOBILE');

-- AlterTable
ALTER TABLE "Consultation" DROP COLUMN "area",
ADD COLUMN     "area" "AREA_OF_EXPERTISE" NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "areas",
ADD COLUMN     "areas" "AREA_OF_EXPERTISE"[];

-- DropEnum
DROP TYPE "AREAS_OF_EXPERTISE";
