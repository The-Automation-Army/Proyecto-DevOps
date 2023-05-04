import { describe, expect, it, vi } from "vitest";
import * as ZookeeperService from "../src/services/zookeeper.service";
import { ZookeeperFactory } from "./factories/ZookeeperFactory";
import { Area } from "@prisma/client";

vi.mock("../libs/prisma");

describe("Zookeeper service", () => {
  it("findAll should return all stored Zookeepers", async () => {
    const mockZookeepers = ZookeeperFactory.findAll();
    const Zookeepers = await ZookeeperService.findAll();

    expect(Zookeepers).toStrictEqual(mockZookeepers);
    expect(Zookeepers.length).toBe(3);
  });

  it("find should return an Zookeeper given a id", async () => {
    const mockZookeeper = ZookeeperFactory.findById({ id: 4 });
    const Zookeeper = await ZookeeperService.find(4);

    expect(Zookeeper).toStrictEqual(mockZookeeper);
  });

  it("create should return the stored Zookeeper", async () => {
    const mockZookeeper = ZookeeperFactory.create({ id: 4 });
    const Zookeeper = await ZookeeperService.create(mockZookeeper);

    expect(Zookeeper).toStrictEqual({ ...Zookeeper, id: 4 });
  });

  it("update should return updated Zookeeper", async () => {
    const data = {
      area: Area.D,
      capacity: 120,
    };
    const mockZookeeper = ZookeeperFactory.update(data);
    const Zookeeper = await ZookeeperService.update(4, mockZookeeper);

    expect(Zookeeper).toStrictEqual(mockZookeeper);
  });

  it("remove should deleted Zookeeper", async () => {
    const animalMock = ZookeeperFactory.delete({ id: 5 });
    const deletedAnimal = await ZookeeperService.remove(5);

    expect(deletedAnimal).toStrictEqual(animalMock);
  });
});
