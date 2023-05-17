import { Request, Response } from "express";
import * as SearchService from "../services/search.service";
import {
  AnimalQueryParams,
  HabitatQueryParams,
  SupplierQueryParams,
} from "../dtos/query.dto";
import { logger } from "../utils/logger";

export const findAnimals = async (req: Request, res: Response) => {
  const animalQueryParams: AnimalQueryParams = req.query;
  logger.debug(
    `${req.method}, Method: findAnimals, query: ${JSON.stringify(
      animalQueryParams
    )}`
  );
  try {
    const animals = await SearchService.findAnimalsBy(animalQueryParams);
    return res.status(200).json(animals);
  } catch (error) {
    logger.warn("Animals not found");
    return res.status(404).json({ message: "Animals not found" });
  }
};

export const findHabitats = async (req: Request, res: Response) => {
  const { area }: HabitatQueryParams = req.query;
  logger.debug(
    `${req.method}, Method: findHabitats, query: ${JSON.stringify(area)}`
  );
  try {
    const habitats = await SearchService.findHabitatsBy({
      area,
    });
    return res.status(200).json(habitats);
  } catch (error) {
    logger.warn("Habitats not found");
    return res.status(404).json({ message: "Habitats not found" });
  }
};

export const findSuppliers = async (req: Request, res: Response) => {
  const params: SupplierQueryParams = req.query;
  logger.debug(
    `${req.method}, Method: findSuppliers, query: ${JSON.stringify(params)}`
  );
  try {
    const suppliers = await SearchService.findSuppliersBy(params);
    return res.status(200).json(suppliers);
  } catch (error) {
    logger.warn("Suppliers not found");
    return res.status(404).json({ message: "Suppliers not found" });
  }
};
