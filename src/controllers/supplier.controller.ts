import { Request, Response } from "express";
import * as SupplierService from "../services/supplier.service";

export const getAllSuppliers = async (_req: Request, res: Response) => {
  const suppliers = await SupplierService.findAll();
  return res.status(200).json(suppliers);
};

export const getOneSupplier = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const supplier = await SupplierService.find(id);
  if (!supplier) {
    return res.status(404).json({ message: "Supplier not found" });
  }
  return res.status(200).json(supplier);
};

export const createNewSupplier = async (req: Request, res: Response) => {
  const newSupplier = req.body;
  try {
    const supplier = await SupplierService.create(newSupplier);
    return res.status(201).json(supplier);
  } catch (error) {
    return res.status(400).json({ message: "Missing or incorrect fields" });
  }
};

export const updateOneSupplier = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updateSupplier = req.body;
  try {
    const supplier = await SupplierService.update(id, updateSupplier);
    return res.status(200).json(supplier);
  } catch (error) {
    return res.status(404).json({ message: "Supplier not found" });
  }
};

export const deleteOneSupplier = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    await SupplierService.remove(id);
    return res.status(200).json({ message: "Supplier deleted" });
  } catch (error) {
    return res.status(404).json({ message: "Supplier not found" });
  }
};
