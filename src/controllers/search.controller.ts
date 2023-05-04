import { Request, Response } from "express";
import * as SearchService from "../services/search.service";
import {
  AnimalQueryParams,
  HabitatQueryParams,
  SupplierQueryParams,
} from "../dtos/query.dto";

export const findAnimals = async (req: Request, res: Response) => {
  const animalQueryParams: AnimalQueryParams = req.query;
  try {
    const animals = await SearchService.findAnimalsBy(animalQueryParams);
    return res.status(200).json(animals);
  } catch (error) {
    return res.status(404).json({ message: "Animals not found" });
  }
};

export const findHabitats = async (req: Request, res: Response) => {
  const { area }: HabitatQueryParams = req.query;
  try {
    const habitats = await SearchService.findHabitatsBy({
      area,
    });
    return res.status(200).json(habitats);
  } catch (error) {
    return res.status(404).json({ message: "Habitats not found" });
  }
};

export const findSuppliers = async (req: Request, res: Response) => {
  const params: SupplierQueryParams = req.query;
  try {
    const suppliers = await SearchService.findSuppliersBy(params);
    return res.status(200).json(suppliers);
  } catch (error) {
    return res.status(404).json({ message: "Suppliers not found" });
  }
};
