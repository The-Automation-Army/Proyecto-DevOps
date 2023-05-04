import { Request, Response } from "express";
import * as HabitatService from "../services/habitat.service";
import { IHabitat } from "../dtos/habitat.dto";

export const getAllHabitats = async (_req: Request, res: Response) => {
  const habitats = await HabitatService.findAll();
  return res.status(200).json(habitats);
};

export const getOneHabitat = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const habitat = await HabitatService.find(id);
  if (!habitat) {
    res.status(404).json({ message: "Habitat not found" });
  }
  return res.status(200).json(habitat);
};

export const createNewHabitat = async (req: Request, res: Response) => {
  const newHabitat: IHabitat = req.body;
  try {
    const habitat = HabitatService.create(newHabitat);
    return res.status(201).json(habitat);
  } catch (error) {
    return res.status(400).json({ message: "Invalid or missing fields" });
  }
};

export const updateOneHabitat = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updateHabitat = req.body;
  const habitat = await HabitatService.update(id, updateHabitat);
  return res.status(200).json(habitat);
};

export const deleteOneHabitat = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    await HabitatService.remove(id);
    res.status(200).json({ message: "Habitat deleted" });
  } catch (error) {
    res.status(404).json({ message: "Habitat doesn't exist" });
  }
};
