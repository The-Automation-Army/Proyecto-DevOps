import prisma from "../../libs/prisma";
import { IHabitat } from "../dtos/habitat.dto";

//Creation of a habitat.
export const create = async (habitatData: IHabitat) => {
  const { size, capacity, area, foodPercentage, zookeepers, animals } =
    habitatData;
  const newHabitat = await prisma.habitat.create({
    data: {
      size: size,
      capacity: capacity,
      area: area,
      foodPercentage: foodPercentage,
      zookeepers: {
        create: zookeepers,
      },
      animals: {
        create: animals,
      },
    },
  });
  return newHabitat;
};

//Read (query) of all habitats.
export const findAll = async () => {
  const habitats = await prisma.habitat.findMany({});
  return habitats;
};

//Read (query) of an habitat by its ID.
export const find = async (habitatId: number) => {
  const habitat = await prisma.habitat.findUnique({
    where: {
      id: habitatId,
    },
  });
  return habitat;
};

//Update of an habitat by its ID.
export const update = async (habitatId: number, habitat: Partial<IHabitat>) => {
  const updateHabitat = await prisma.habitat.update({
    where: {
      id: habitatId,
    },
    data: {
      area: habitat.area,
      capacity: habitat.capacity,
      size: habitat.size,
      animals: {
        create: habitat.animals,
      },
      zookeepers: {
        create: habitat.zookeepers,
      },
    },
  });
  return updateHabitat;
};

//Delete of an habitat by its ID.
export const remove = async (requestedId: number) => {
  const habitat = await prisma.habitat.delete({
    where: {
      id: requestedId,
    },
  });

  return habitat;
};
