import { Request, Response } from "express";
import * as HabitatService from "../services/habitat.service";
import { IHabitat } from "../dtos/habitat.dto";
import { debugApi, warnEntityNotFound } from "../utils/loggerCases";
import { logger } from "../utils/logger";

export const getAllHabitats = async (req: Request, res: Response) => {
  debugApi("getAllHabitats", req.params);
  const habitats = await HabitatService.findAll();
  return res.status(200).json(habitats);
};

export const getOneHabitat = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  debugApi("getOneHabitat", req.params);
  const habitat = await HabitatService.find(id);
  if (!habitat) {
    warnEntityNotFound();
    res.status(404).json({ message: "Habitat not found" });
  }
  return res.status(200).json(habitat);
};

export const createNewHabitat = async (req: Request, res: Response) => {
  const newHabitat: IHabitat = req.body;
  debugApi("createNewHabitat", req.params, newHabitat);
  try {
    const habitat = HabitatService.create(newHabitat);
    return res.status(201).json(habitat);
  } catch (error) {
    logger.warn("Invalid or missing fields");
    return res.status(400).json({ message: "Invalid or missing fields" });
  }
};

export const updateOneHabitat = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updateHabitat = req.body;
  debugApi("updateOneHabitat", req.params, updateHabitat);
  try {
    const habitat = await HabitatService.update(id, updateHabitat);
    return res.status(200).json(habitat);
  } catch (error) {
    warnEntityNotFound();
    return res.status(404).json({ message: "habitat not found" });
  }
};

export const deleteOneHabitat = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  debugApi("deleteOneHabitat", req.params);
  try {
    await HabitatService.remove(id);
    res.status(200).json({ message: "Habitat deleted" });
  } catch (error) {
    warnEntityNotFound();
    res.status(404).json({ message: "Habitat doesn't exist" });
  }
};
