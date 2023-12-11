/*
  Warnings:

  - You are about to drop the column `id_user` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `product_id` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `transaction_name` on the `Transaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Transaction` DROP COLUMN `id_user`,
    DROP COLUMN `product_id`,
    DROP COLUMN `transaction_name`;
