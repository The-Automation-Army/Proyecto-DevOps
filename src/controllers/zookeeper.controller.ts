import { Request, Response } from "express";
import * as ZookeeperService from "../services/zookeeper.service";

export const getAllZookeepers = async () => {
  const zookeepers = await ZookeeperService.findAll();
  return zookeepers;
};

export const getOneZookeeper = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const zookeeper = await ZookeeperService.find(id);
  if (!zookeeper) {
    res.status(404).json({ message: "Zookeeper not found" });
  }
  return res.status(200).json(zookeeper);
};

export const createNewZookeeper = async (req: Request, res: Response) => {
  const newZookeeper = req.body;
  try {
    const zookeeper = await ZookeeperService.create(newZookeeper);
    return res.status(201).json(zookeeper);
  } catch (error) {
    return res.status(400).json({ message: "Invalid or missing fields" });
  }
};

export const updateOneZookeeper = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updateZookeeper = req.body;
  try {
    const zookeeper = await ZookeeperService.update(id, updateZookeeper);
    return res.status(200).json(zookeeper);
  } catch (error) {
    return res.status(404).json({ message: "Zookeeper doesn't exist" });
  }
};

export const deleteOneZookeeper = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    await ZookeeperService.remove(id);
    res.status(200).json({ message: "Zookeeper deleted" });
  } catch (error) {
    res.status(404).json({ message: "Zookeeper doesn't exist" });
  }
};
