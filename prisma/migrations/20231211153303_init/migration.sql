/*
  Warnings:

  - You are about to drop the column `imageURL` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `ContactUs` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `ContactUs` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `ContactUs` table. All the data in the column will be lost.
  - You are about to drop the column `category_name` on the `Product` table. All the data in the column will be lost.
  - You are about to alter the column `discounted_price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `image` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama` to the `ContactUs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pesan` to the `ContactUs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Made the column `category_id` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Category` DROP COLUMN `imageURL`,
    ADD COLUMN `image` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `ContactUs` DROP COLUMN `message`,
    DROP COLUMN `name`,
    DROP COLUMN `phoneNumber`,
    ADD COLUMN `nama` VARCHAR(191) NOT NULL,
    ADD COLUMN `pesan` TEXT NOT NULL,
    ADD COLUMN `telepon` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Product` DROP COLUMN `category_name`,
    ADD COLUMN `category` VARCHAR(191) NOT NULL,
    MODIFY `discounted_price` INTEGER NOT NULL,
    MODIFY `category_id` INTEGER NOT NULL;
