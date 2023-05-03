/*
  Warnings:

  - You are about to drop the `Animal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Habitat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Supplier` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Zookeeper` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Animal" DROP CONSTRAINT "Animal_habitatId_fkey";

-- DropForeignKey
ALTER TABLE "ZookeepersCaringHabitats" DROP CONSTRAINT "ZookeepersCaringHabitats_habitadId_fkey";

-- DropForeignKey
ALTER TABLE "ZookeepersCaringHabitats" DROP CONSTRAINT "ZookeepersCaringHabitats_zookepeerId_fkey";

-- DropTable
DROP TABLE "Animal";

-- DropTable
DROP TABLE "Habitat";

-- DropTable
DROP TABLE "Supplier";

-- DropTable
DROP TABLE "Zookeeper";

-- CreateTable
CREATE TABLE "zookeepers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "responsibility" "Role" NOT NULL DEFAULT 'USER',
    "qualification" "Qualification" NOT NULL,
    "salary" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "zookeepers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "habitats" (
    "id" SERIAL NOT NULL,
    "category" "Category" NOT NULL,
    "size" DOUBLE PRECISION NOT NULL,
    "capacity" INTEGER NOT NULL,
    "area" "Area" NOT NULL,
    "food_percentage" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "habitats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "animals" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "category" "Category" NOT NULL,
    "diet" "Diet" NOT NULL,
    "habitatId" INTEGER NOT NULL,

    CONSTRAINT "animals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suppliers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "Type" NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "suppliers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "zookeepers_id_key" ON "zookeepers"("id");

-- CreateIndex
CREATE UNIQUE INDEX "habitats_id_key" ON "habitats"("id");

-- CreateIndex
CREATE UNIQUE INDEX "animals_id_key" ON "animals"("id");

-- CreateIndex
CREATE UNIQUE INDEX "suppliers_id_key" ON "suppliers"("id");

-- CreateIndex
CREATE UNIQUE INDEX "suppliers_email_key" ON "suppliers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "suppliers_telephone_key" ON "suppliers"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "suppliers_address_key" ON "suppliers"("address");

-- AddForeignKey
ALTER TABLE "animals" ADD CONSTRAINT "animals_habitatId_fkey" FOREIGN KEY ("habitatId") REFERENCES "habitats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ZookeepersCaringHabitats" ADD CONSTRAINT "ZookeepersCaringHabitats_zookepeerId_fkey" FOREIGN KEY ("zookepeerId") REFERENCES "zookeepers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ZookeepersCaringHabitats" ADD CONSTRAINT "ZookeepersCaringHabitats_habitadId_fkey" FOREIGN KEY ("habitadId") REFERENCES "habitats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
