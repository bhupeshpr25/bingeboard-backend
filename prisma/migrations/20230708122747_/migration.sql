/*
  Warnings:

  - You are about to drop the column `timestamp` on the `Note` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Note" DROP COLUMN "timestamp",
ADD COLUMN     "timestampHr" INTEGER,
ADD COLUMN     "timestampMin" INTEGER,
ADD COLUMN     "timestampSec" INTEGER;
