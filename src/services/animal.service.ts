import prisma from "../../libs/prisma";
import { BaseAnimal, IAnimal } from "../dtos/animal.dto";

//Creation of one animal.
export const create = async (animalData: BaseAnimal) => {
  const animal = await prisma.animal.create({
    data: {
      ...animalData,
    },
  });

  return animal;
};

//Read (query) of all animals.
export const findAll = async () => {
  const animals = await prisma.animal.findMany({});
  return animals;
};

//Read (query) of a unique animal via its ID.
export const find = async (animalId: number) => {
  const animal = await prisma.animal.findUnique({
    where: {
      id: animalId,
    },
  });
  return animal;
};

//Update of an animal via its ID.
export const update = async (
  animalId: number,
  dataToUpdate: Partial<IAnimal>
) => {
  const animal = await prisma.animal.update({
    where: {
      id: animalId,
    },
    data: {
      ...dataToUpdate,
    },
  });

  return animal;
};

//Delete of an animal via is ID.
export const remove = async (animalId: number) => {
  const animal = await prisma.animal.delete({
    where: {
      id: animalId,
    },
  });

  return animal;
};
