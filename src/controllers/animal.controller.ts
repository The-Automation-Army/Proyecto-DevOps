import { Request, Response } from "express";
import * as AnimalService from "../services/animal.service";
import { BaseAnimal } from "../dtos/animal.dto";

export const getAllAnimals = async (_req: Request, res: Response) => {
  const animals = await AnimalService.findAll();
  return res.status(200).json(animals);
};

export const getOneAnimal = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const animal = await AnimalService.find(id);
  if (!animal) {
    return res.status(404).json({ message: "Animal not found" });
  }
  return res.status(200).json(animal);
};

export const createNewAnimal = async (req: Request, res: Response) => {
  const newAnimal: BaseAnimal = req.body;
  try {
    const animal = await AnimalService.create(newAnimal);
    return res.status(201).json(animal);
  } catch (error) {
    return res.status(400).json({ message: "Missing or incorrect fields" });
  }
};

export const updateOneAnimal = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const animalUpdate = req.body;
  try {
    const animal = await AnimalService.update(id, animalUpdate);
    return res.status(200).json(animal);
  } catch (error) {
    return res.status(404).json({ message: "Animal not found" });
  }
};

export const deleteOneAnimal = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    await AnimalService.remove(id);
    res.status(200).json({ message: "Animal deleted" });
  } catch (error) {
    res.status(404).json({ message: "Animal not found" });
  }
};
