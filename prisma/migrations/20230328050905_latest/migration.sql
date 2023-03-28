-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('AMPHIBIANS_FISH', 'BIRDS', 'INVERTEBRATES', 'MAMMALS', 'REPTILES');

-- CreateEnum
CREATE TYPE "Diet" AS ENUM ('Herbivorous', 'Omnivores', 'Carnivorous');

-- CreateEnum
CREATE TYPE "Qualification" AS ENUM ('Biology', 'Psychology');

-- CreateEnum
CREATE TYPE "Area" AS ENUM ('A', 'B', 'C', 'D');

-- CreateEnum
CREATE TYPE "Type" AS ENUM ('service', 'product');

-- CreateTable
CREATE TABLE "Zookeeper" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "responsibility" "Role" NOT NULL DEFAULT 'USER',
    "qualification" "Qualification" NOT NULL,
    "salary" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Zookeeper_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Habitat" (
    "id" SERIAL NOT NULL,
    "category" "Category" NOT NULL,
    "size" DOUBLE PRECISION NOT NULL,
    "capacity" INTEGER NOT NULL,
    "area" "Area" NOT NULL,
    "food_percentage" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Habitat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Animal" (
    "animal_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "category" "Category" NOT NULL,
    "diet" "Diet" NOT NULL,
    "habitatId" INTEGER NOT NULL,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("animal_id")
);

-- CreateTable
CREATE TABLE "Supplier" (
    "supplier_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "Type" NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("supplier_id")
);

-- CreateTable
CREATE TABLE "ZookeepersCaringHabitats" (
    "zookepeerId" INTEGER NOT NULL,
    "habitadId" INTEGER NOT NULL,

    CONSTRAINT "ZookeepersCaringHabitats_pkey" PRIMARY KEY ("zookepeerId","habitadId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Zookeeper_id_key" ON "Zookeeper"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Habitat_id_key" ON "Habitat"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Animal_animal_id_key" ON "Animal"("animal_id");

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_supplier_id_key" ON "Supplier"("supplier_id");

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_email_key" ON "Supplier"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_telephone_key" ON "Supplier"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_address_key" ON "Supplier"("address");

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_habitatId_fkey" FOREIGN KEY ("habitatId") REFERENCES "Habitat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ZookeepersCaringHabitats" ADD CONSTRAINT "ZookeepersCaringHabitats_zookepeerId_fkey" FOREIGN KEY ("zookepeerId") REFERENCES "Zookeeper"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ZookeepersCaringHabitats" ADD CONSTRAINT "ZookeepersCaringHabitats_habitadId_fkey" FOREIGN KEY ("habitadId") REFERENCES "Habitat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
