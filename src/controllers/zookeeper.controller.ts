import { Request, Response } from "express";
import { createZookeeper, deleteZookeeperById, findZookeeperById, updateZookeeperById } from "../services/zookeeper.service";

export const createNewZookeeper = async (req:Request, res:Response) => {
    const {name, responsibility, qualification, salary, habitats} = req.body;
    const zookeeper = await createZookeeper(name, responsibility, qualification, salary, habitats);
    return res.status(201).json(zookeeper);
};

export const findAnZookeeperById = async (req:Request, res:Response) => {
    const {id} = req.body;
    const zookeeper = await findZookeeperById(id);
    return res.status(200).json(zookeeper);
};

export const updateAnZookeeperById = async (req:Request, res:Response) => {
    const {id, name, responsibility, qualification, salary, habitats} = req.body;
    const zookeeper = await updateZookeeperById(id, name, responsibility, qualification, salary, habitats);
    return res.status(200).json(zookeeper);
};

export const deleteAnZookeeperById = async (req:Request, res:Response) => {
    const {id} = req.body;
    await deleteZookeeperById(id);
};