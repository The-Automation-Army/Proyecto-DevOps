import { Request, Response } from "express";
import * as SupplierService from "../services/supplier.service";
import { debugApi, debugRequestBody, warnEntityNotFound } from "../utils/loggerCases";
import { logger } from "../utils/logger";

export const getAllSuppliers = async (req: Request, res: Response) => {
  debugApi("getAllSuppliers");
  const suppliers = await SupplierService.findAll();
  return res.status(200).json(suppliers);
};

export const getOneSupplier = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  debugApi("getOneSupplier", req.params);
  const supplier = await SupplierService.find(id);
  if (!supplier) {
    warnEntityNotFound();
    return res.status(404).json({ message: "Supplier not found" });
  }
  return res.status(200).json(supplier);
};

export const createNewSupplier = async (req: Request, res: Response) => {
  const newSupplier = req.body;
  debugRequestBody("createNewSupplier", req.params, newSupplier);
  try {
    const supplier = await SupplierService.create(newSupplier);
    return res.status(201).json(supplier);
  } catch (error) {
    logger.warn("Missing or incorrect fields");
    return res.status(400).json({ message: "Missing or incorrect fields" });
  }
};

export const updateOneSupplier = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updateSupplier = req.body;
  debugRequestBody("updateOneSupplier", req.params, updateSupplier);
  try {
    const supplier = await SupplierService.update(id, updateSupplier);
    return res.status(200).json(supplier);
  } catch (error) {
    warnEntityNotFound();
    return res.status(404).json({ message: "Supplier not found" });
  }
};

export const deleteOneSupplier = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  debugApi("deleteOneSupplier", req.params);
  try {
    await SupplierService.remove(id);
    return res.status(200).json({ message: "Supplier deleted" });
  } catch (error) {
    warnEntityNotFound();
    return res.status(404).json({ message: "Supplier not found" });
  }
};
