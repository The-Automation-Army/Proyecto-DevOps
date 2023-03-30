import { Request, Response } from "express";
import { createAnimal, findAnimalById, findAnimalsByName, findAnimalsByCategory, updateAnimalById, deleteAnimalById } from "../services/animal.service";

export const createNewAnimal = async (req:Request, res:Response) => {
    const {name, gender, height, weight, category, diet, belongTo} = req.body;
    const animal = await createAnimal(name, gender, height, weight, category, diet, belongTo)
    return res.status(201).json(animal);
};

export const findAnAnimalById = async (req:Request, res:Response) => {
    const {id} = req.body;
    const animal = await findAnimalById(id);
    return res.status(200).json(animal);
};

export const findManyAnimalsByName = async (req:Request, res:Response) => {
    const {name} = req.body;
    const animal = await findAnimalsByName;
    return res.status(200).json(animal);
};

export const findManyAnimalsByCategory = async (req:Request, res:Response) => {
    const {category} = req.body;
    const animal = await findAnimalsByCategory(category);
    return res.status(200).json(animal);
};

export const updateAnAnimalById = async (req:Request, res:Response) => {
    const {id, name, gender, height, weight, category, diet, belongTo} = req.body;
    const animal = await updateAnimalById(id, name, gender, height, weight, category, diet, belongTo);
    return res.status(200).json(animal);
};

export const deleteAnAnimalById = async (req:Request, res:Response) => {
    const {id} = req.body;
    await deleteAnimalById(id);
}