/*
  Warnings:

  - Added the required column `goalPercentage` to the `TimeBox` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TimeBox" ADD COLUMN     "goalPercentage" INTEGER NOT NULL;
