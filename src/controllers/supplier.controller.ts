import { Request, Response } from "express";
import {
  createSupplier,
  deleteSupplierById,
  findAllSuppliers,
  findSupplierById,
  findSuppliersByName,
  updateSupplierById,
} from "../services/supplier.service";

export const createNewSupplier = async (req: Request, res: Response) => {
  const { name, type, email, telephone, address } = req.body;
  try {
    const supplier = await createSupplier({
      name,
      type,
      email,
      telephone,
      address,
    });
    return res.status(201).json(supplier);
  } catch (error) {
    return res.status(400).json({ message: "Missing or incorrect fields" });
  }
};

export const findSuppliers = async (_req: Request, res: Response) => {
  const suppliers = await findAllSuppliers();
  return res.status(200).json(suppliers);
};

export const findAnSupplierById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const supplier = await findSupplierById(id);
  if (!supplier) {
    return res.status(404).json({ message: "Supplier not found" });
  }
  return res.status(200).json(supplier);
};

export const findManySuppliersByName = async (req: Request, res: Response) => {
  const params = req.query.name as string;
  const suppliers = await findSuppliersByName(params);
  return res.status(200).json(suppliers);
};

export const updateASupplierById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { name, type, email, telephone, address } = req.body;
  try {
    const supplier = await updateSupplierById({
      id,
      name,
      type,
      email,
      telephone,
      address,
    });
    return res.status(200).json(supplier);
  } catch (error) {
    return res.status(404).json({ message: "Supplier not found" });
  }
};

export const deleteASupplierById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    await deleteSupplierById(id);
    return res.status(200).json({ message: "Supplier deleted" });
  } catch (error) {
    return res.status(404).json({ message: "Supplier not found" });
  }
};
