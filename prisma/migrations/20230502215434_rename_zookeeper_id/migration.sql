/*
  Warnings:

  - The primary key for the `ZookeepersCaringHabitats` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `zookepeerId` on the `ZookeepersCaringHabitats` table. All the data in the column will be lost.
  - Added the required column `zookeeperId` to the `ZookeepersCaringHabitats` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ZookeepersCaringHabitats" DROP CONSTRAINT "ZookeepersCaringHabitats_zookepeerId_fkey";

-- AlterTable
ALTER TABLE "ZookeepersCaringHabitats" DROP CONSTRAINT "ZookeepersCaringHabitats_pkey",
DROP COLUMN "zookepeerId",
ADD COLUMN     "zookeeperId" INTEGER NOT NULL,
ADD CONSTRAINT "ZookeepersCaringHabitats_pkey" PRIMARY KEY ("zookeeperId", "habitatId");

-- AddForeignKey
ALTER TABLE "ZookeepersCaringHabitats" ADD CONSTRAINT "ZookeepersCaringHabitats_zookeeperId_fkey" FOREIGN KEY ("zookeeperId") REFERENCES "zookeepers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
