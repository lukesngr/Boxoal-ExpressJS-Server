/*
  Warnings:

  - You are about to drop the column `name` on the `Goal` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the `CompletedHabit` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `title` to the `Goal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Goal" DROP COLUMN "name",
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "name",
ADD COLUMN     "title" TEXT NOT NULL;

-- DropTable
DROP TABLE "CompletedHabit";
