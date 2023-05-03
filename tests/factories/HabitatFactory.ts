import { Area } from "@prisma/client";
import prisma from "../../libs/__mocks__/prisma";
import { AnimalFactory } from "./AnimalFactory";

export const HabitatFactory = {
  build: (attrs = {}) => {
    return {
      id: 1,
      size: 10,
      capacity: 100,
      area: Area.C,
      foodPercentage: 45.7,
      zookeepers: [
        {
          zookeeperId: 1,
          habitatId: 1,
        },
      ],
      animals: [AnimalFactory.build()],
      ...attrs,
    };
  },
  create: (attrs = {}) => {
    const mockHabitat = HabitatFactory.build(attrs);
    prisma.habitat.create.mockResolvedValue(mockHabitat);

    return mockHabitat;
  },
  findAll: () => {
    const mockHabitats = [
      HabitatFactory.build({ id: 4 }),
      HabitatFactory.build({ id: 5 }),
      HabitatFactory.build({ id: 6 }),
    ];
    prisma.habitat.findMany.mockResolvedValue(mockHabitats);

    return mockHabitats;
  },
  findById: (attrs = {}) => {
    const mockHabitat = HabitatFactory.build(attrs);
    prisma.habitat.findUnique.mockResolvedValue(mockHabitat);

    return mockHabitat;
  },
  update: (attrs = {}) => {
    const mockHabitat = HabitatFactory.build(attrs);
    prisma.habitat.update.mockResolvedValue(mockHabitat);
    return mockHabitat;
  },
  delete: (attrs = {}) => {
    const mockHabitat = HabitatFactory.build(attrs);
    prisma.habitat.delete.mockResolvedValue(mockHabitat);
    return mockHabitat;
  },
};
