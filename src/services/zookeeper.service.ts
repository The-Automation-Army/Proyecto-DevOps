import prisma from "../../libs/prisma";
import { IZookeeper } from "../dtos/zookeeper.dto";

//Creation of a zookeeper.
export const create = async (newZookeeper: IZookeeper) => {
  const zookeeper = await prisma.zookeeper.create({
    data: {
      name: newZookeeper.name,
      responsibility: newZookeeper.responsibility,
      qualification: newZookeeper.qualification,
      salary: newZookeeper.salary,
      habitats: {
        create: newZookeeper.habitats,
      },
    },
  });
  return zookeeper;
};

//Read (query) of all zookeepers.
export const findAll = async () => {
  const zookeepers = await prisma.zookeeper.findMany({});
  return zookeepers;
};

//Read (query) of a zookeeper by his ID.
export const find = async (requestedId: number) => {
  const zookeeper = await prisma.zookeeper.findUnique({
    where: {
      id: requestedId,
    },
  });
  return zookeeper;
};

//Update of a zookeeper by his ID.
export const update = async (
  requestedId: number,
  updateZookeeper: Partial<IZookeeper>
) => {
  const zookeeper = await prisma.zookeeper.update({
    where: {
      id: requestedId,
    },
    data: {
      name: updateZookeeper.name,
      responsibility: updateZookeeper.responsibility,
      qualification: updateZookeeper.qualification,
      salary: updateZookeeper.salary,
      habitats: {
        create: updateZookeeper.habitats,
      },
    },
  });
  return zookeeper;
};

//Delete of a zookeeper by his ID.
export const remove = async (requestedId: number) => {
  const zookeeper = await prisma.zookeeper.delete({
    where: {
      id: requestedId,
    },
  });
  return zookeeper;
};
