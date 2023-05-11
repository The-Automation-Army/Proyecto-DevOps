import { Request, Response } from "express";
import * as AnimalService from "../services/animal.service";
import { BaseAnimal } from "../dtos/animal.dto";
import { logger } from "../utils/logger";
import { debugApi, warnEntityNotFound } from "../utils/loggerCases";

export const getAllAnimals = async (req: Request, res: Response) => {
  debugApi("getAllAnimals", req.params);
  const animals = await AnimalService.findAll();
  return res.status(200).json(animals);
};

export const getOneAnimal = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  debugApi("getOneAnimal", req.params);
  const animal = await AnimalService.find(id);
  if (!animal) {
    warnEntityNotFound();
    return res.status(404).json({ message: "Animal not found" });
  }
  return res.status(200).json(animal);
};

export const createNewAnimal = async (req: Request, res: Response) => {
  const newAnimal: BaseAnimal = req.body;
  debugApi("createNewAnimal", req.params, newAnimal);
  try {
    const animal = await AnimalService.create(newAnimal);
    return res.status(201).json(animal);
  } catch (error) {
    logger.warn("Missing or incorrect fields");
    return res.status(400).json({ message: "Missing or incorrect fields" });
  }
};

export const updateOneAnimal = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const animalUpdate = req.body;
  debugApi("updateOneAnimal", req.params, animalUpdate);
  try {
    const animal = await AnimalService.update(id, animalUpdate);
    return res.status(200).json(animal);
  } catch (error) {
    warnEntityNotFound();
    return res.status(404).json({ message: "Animal not found" });
  }
};

export const deleteOneAnimal = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  debugApi("deleteOneAnimal", req.params);
  try {
    await AnimalService.remove(id);
    res.status(200).json({ message: "Animal deleted" });
  } catch (error) {
    warnEntityNotFound();
    res.status(404).json({ message: "Animal not found" });
  }
};
