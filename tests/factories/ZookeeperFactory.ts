import { Qualification, Role } from "@prisma/client";
import prisma from "../../libs/__mocks__/prisma";

export const ZookeeperFactory = {
  build: (attrs = {}) => {
    const now = new Date("2023-04-25");
    return {
      id: 1,
      name: "John",
      responsibility: Role.USER,
      qualification: Qualification.Biology,
      salary: 4000.0,
      createdAt: now,
      updatedAt: now,
      habitats: [
        {
          zookeeperId: 1,
          habitatId: 1,
        },
      ],
      ...attrs,
    };
  },
  create: (attrs = {}) => {
    const mockZookeeper = ZookeeperFactory.build(attrs);
    prisma.zookeeper.create.mockResolvedValue(mockZookeeper);

    return mockZookeeper;
  },
  findAll: () => {
    const mockZookeepers = [
      ZookeeperFactory.build({ id: 4 }),
      ZookeeperFactory.build({ id: 5 }),
      ZookeeperFactory.build({ id: 6 }),
    ];
    prisma.zookeeper.findMany.mockResolvedValue(mockZookeepers);

    return mockZookeepers;
  },
  findById: (attrs = {}) => {
    const mockZookeeper = ZookeeperFactory.build(attrs);
    prisma.zookeeper.findUnique.mockResolvedValue(mockZookeeper);

    return mockZookeeper;
  },
  update: (attrs = {}) => {
    const mockZookeeper = ZookeeperFactory.build(attrs);
    prisma.zookeeper.update.mockResolvedValue(mockZookeeper);
    return mockZookeeper;
  },
  delete: (attrs = {}) => {
    const mockZookeeper = ZookeeperFactory.build(attrs);
    prisma.zookeeper.delete.mockResolvedValue(mockZookeeper);
    return mockZookeeper;
  },
};
