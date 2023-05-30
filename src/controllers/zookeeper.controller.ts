import { Request, Response } from "express";
import * as ZookeeperService from "../services/zookeeper.service";
import {
  debugApi,
  debugRequestBody,
  warnEntityNotFound,
} from "../utils/loggerCases";
import { logger } from "../utils/logger";

export const getAllZookeepers = async (req: Request, res: Response) => {
  debugApi("getAllZookeepers");
  const zookeepers = await ZookeeperService.findAll();
  return res.status(200).json(zookeepers);
};

export const getOneZookeeper = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  debugApi("getOneZookeeper", req.params);
  const zookeeper = await ZookeeperService.find(id);
  if (!zookeeper) {
    warnEntityNotFound();
    res.status(404).json({ message: "Zookeeper not found" });
  }
  return res.status(200).json(zookeeper);
};

export const createNewZookeeper = async (req: Request, res: Response) => {
  const newZookeeper = req.body;
  debugRequestBody("createNewZookeeper", req.params, newZookeeper);
  try {
    const zookeeper = await ZookeeperService.create(newZookeeper);
    return res.status(201).json(zookeeper);
  } catch (error) {
    logger.warn("Invalid or missing fields");
    return res.status(400).json({ message: "Invalid or missing fields" });
  }
};

export const updateOneZookeeper = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updateZookeeper = req.body;
  debugRequestBody("updateOneZookeeper", req.params, updateZookeeper);
  try {
    const zookeeper = await ZookeeperService.update(id, updateZookeeper);
    return res.status(200).json(zookeeper);
  } catch (error) {
    warnEntityNotFound();
    return res.status(404).json({ message: "Zookeeper doesn't exist" });
  }
};

export const deleteOneZookeeper = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  debugApi("deleteOneZookeeper", req.params);
  try {
    await ZookeeperService.remove(id);
    res.status(200).json({ message: "Zookeeper deleted" });
  } catch (error) {
    warnEntityNotFound();
    res.status(404).json({ message: "Zookeeper doesn't exist" });
  }
};
