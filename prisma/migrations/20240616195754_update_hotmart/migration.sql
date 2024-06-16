/*
  Warnings:

  - You are about to drop the column `eventBodyVertion` on the `HotmartEvent` table. All the data in the column will be lost.
  - Added the required column `eventBodyVersion` to the `HotmartEvent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "HotmartEvent" DROP COLUMN "eventBodyVertion",
ADD COLUMN     "eventBodyVersion" TEXT NOT NULL;
