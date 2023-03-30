import { Request, Response } from "express";
import { createHabitat, findHabitatById, findHabitatsByCategory, findHabitatsBySize, findHabitatsByCapacity, findHabitatsByArea, updateHabitatById, deleteHabitatById } from "../services/habitat.service";

export const createNewHabitat = async (req:Request, res:Response) => {
    const {category, size, capacity, area, food_percentage, zookeepers, animals} = req.body;
    const habitat = createHabitat (category, size, capacity, area, food_percentage, zookeepers, animals);
    return res.status(201).json(habitat);
};

export const findAnAnimalById = async (req:Request, res:Response) => {
    const {id} = req.body;
    const habitat = await findHabitatById(id);
    return res.status(200).json(habitat);
};

export const findManyHabitatsByCategory = async (req:Request, res:Response) => {
    const {category} = req.body;
    const habitat = await findHabitatsByCategory(category);
    return res.status(200).json(habitat);
};

export const findManyHabitatsBySize = async (req:Request, res:Response) => {
    const {size} = req.body;
    const habitat = await findHabitatsBySize(size);
    return res.status(200).json(habitat);
};

export const findManyHabitatsByCapacity = async (req:Request, res:Response) => {
    const {capacity} = req.body;
    const habitat = await findHabitatsByCapacity(capacity);
    return res.status(200).json(habitat);
};

export const findManyHabitatsByArea = async (req:Request, res:Response) => {
    const {area} = req.body;
    const habitat = await findHabitatsByArea(area);
    return res.status(200).json(habitat);
};

export const updateAnHabitatById = async (req:Request, res:Response) => {
    const {id, category, size, capacity, area, food_percentage, zookeepers, animals} = req.body;
    const habitat = await updateHabitatById(id, category, size, capacity, area, food_percentage, zookeepers, animals);
    return res.status(200).json(habitat);
};

export const deleteAnHabitatById = async (req:Request, res:Response) => {
    const {id} = req.body;
    await deleteHabitatById(id);
};