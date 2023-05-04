import { Category, Diet } from "@prisma/client";
import prisma from "../../libs/__mocks__/prisma";

export const AnimalFactory = {
  build: (attrs = {}) => {
    return {
      id: 1,
      name: "Tiger",
      gender: "Male",
      height: 60,
      weight: 180,
      category: Category.MAMMALS,
      diet: Diet.Carnivorous,
      habitatId: 1,
      ...attrs,
    };
  },
  create: (attrs = {}) => {
    const mockAnimal = AnimalFactory.build(attrs);
    prisma.animal.create.mockResolvedValue(mockAnimal);

    return mockAnimal;
  },
  findAll: () => {
    const mockAnimals = [
      AnimalFactory.build({ id: 4 }),
      AnimalFactory.build({ id: 5 }),
      AnimalFactory.build({ id: 6 }),
    ];
    prisma.animal.findMany.mockResolvedValue(mockAnimals);

    return mockAnimals;
  },
  findById: (attrs = {}) => {
    const mockAnimal = AnimalFactory.build(attrs);
    prisma.animal.findUnique.mockResolvedValue(mockAnimal);

    return mockAnimal;
  },
  update: (attrs = {}) => {
    const mockAnimal = AnimalFactory.build(attrs);
    prisma.animal.update.mockResolvedValue(mockAnimal);
    return mockAnimal;
  },
  delete: (attrs = {}) => {
    const mockAnimal = AnimalFactory.build(attrs);
    prisma.animal.delete.mockResolvedValue(mockAnimal);
    return mockAnimal;
  },
};
