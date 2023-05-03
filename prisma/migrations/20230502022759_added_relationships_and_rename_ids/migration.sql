/*
  Warnings:

  - The primary key for the `ZookeepersCaringHabitats` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `habitadId` on the `ZookeepersCaringHabitats` table. All the data in the column will be lost.
  - You are about to drop the column `food_percentage` on the `habitats` table. All the data in the column will be lost.
  - Added the required column `habitatId` to the `ZookeepersCaringHabitats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foodPercentage` to the `habitats` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ZookeepersCaringHabitats" DROP CONSTRAINT "ZookeepersCaringHabitats_habitadId_fkey";

-- AlterTable
ALTER TABLE "ZookeepersCaringHabitats" DROP CONSTRAINT "ZookeepersCaringHabitats_pkey",
DROP COLUMN "habitadId",
ADD COLUMN     "habitatId" INTEGER NOT NULL,
ADD CONSTRAINT "ZookeepersCaringHabitats_pkey" PRIMARY KEY ("zookepeerId", "habitatId");

-- AlterTable
ALTER TABLE "habitats" DROP COLUMN "food_percentage",
ADD COLUMN     "foodPercentage" DOUBLE PRECISION NOT NULL;

-- AddForeignKey
ALTER TABLE "ZookeepersCaringHabitats" ADD CONSTRAINT "ZookeepersCaringHabitats_habitatId_fkey" FOREIGN KEY ("habitatId") REFERENCES "habitats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
