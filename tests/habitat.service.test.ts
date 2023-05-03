import { describe, expect, it, vi } from "vitest";
import * as HabitatService from "../src/services/habitat.service";
import { HabitatFactory } from "./factories/HabitatFactory";
import { Area } from "@prisma/client";

vi.mock("../libs/prisma");

describe("Habitat service", () => {
  it("findAll should return all stored habitats", async () => {
    const mockHabitats = HabitatFactory.findAll();
    const habitats = await HabitatService.findAll();

    expect(habitats).toStrictEqual(mockHabitats);
    expect(habitats.length).toBe(3);
  });

  it("find should return an habitat given a id", async () => {
    const mockHabitat = HabitatFactory.findById({ id: 4 });
    const habitat = await HabitatService.find(4);

    expect(habitat).toStrictEqual(mockHabitat);
  });

  it("create should return the stored habitat", async () => {
    const mockHabitat = HabitatFactory.create({ id: 4 });
    const habitat = await HabitatService.create(mockHabitat);

    expect(habitat).toStrictEqual({ ...habitat, id: 4 });
  });

  it("update should return updated habitat", async () => {
    const data = {
      area: Area.D,
      capacity: 120,
    };
    const mockHabitat = HabitatFactory.update(data);
    const habitat = await HabitatService.update(4, mockHabitat);

    expect(habitat).toStrictEqual(mockHabitat);
  });

  it("remove should deleted habitat", async () => {
    const animalMock = HabitatFactory.delete({ id: 5 });
    const deletedAnimal = await HabitatService.remove(5);

    expect(deletedAnimal).toStrictEqual(animalMock);
  });
});
