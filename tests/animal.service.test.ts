import { describe, expect, it, vi } from "vitest";
import { AnimalFactory } from "./factories/AnimalFactory";
import * as AnimalService from "../src/services/animal.service";

vi.mock("../libs/prisma");

describe("Animal service", () => {
  it("findAll should return all stored animals", async () => {
    const mockAnimals = AnimalFactory.findAll();
    const animals = await AnimalService.findAll();

    expect(animals).toStrictEqual(mockAnimals);
    expect(animals.length).toBe(3);
  });

  it("find should return an animal given a id", async () => {
    const mockAnimal = AnimalFactory.findById({ id: 4 });
    const animal = await AnimalService.find(4);

    expect(animal).toStrictEqual(mockAnimal);
  });

  it("create should return the stored animal", async () => {
    const mockAnimal = AnimalFactory.create({ id: 4 });
    const animal = await AnimalService.create(mockAnimal);

    expect(animal).toStrictEqual({ ...mockAnimal, id: 4 });
  });

  it("update should return updated animal", async () => {
    const data = {
      name: "Lion",
      gender: "Female",
    };
    const mockAnimal = AnimalFactory.update(data);
    const animal = await AnimalService.update(4, mockAnimal);

    expect(animal).toStrictEqual(mockAnimal);
  });

  it("remove should deleted animal", async () => {
    const animalMock = AnimalFactory.delete({ id: 2 });
    const deletedAnimal = await AnimalService.remove(2);

    expect(deletedAnimal).toStrictEqual(animalMock);
  });
});
