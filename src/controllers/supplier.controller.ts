import { Request, Response } from "express";
import { createSupplier, findSupplierById, findSuppliersByName, updateSupplierById, deleteSupplierById} from "../services/supplier.service";

export const createNewSupplier = async (req:Request, res:Response) => {
    const {name, type, emaial, telephone, address} = req.body;
    const supplier = await createSupplier (name, type, emaial, telephone, address);
    return res.status(201).json(supplier);
};

export const findAnSupplierById = async (req:Request, res:Response) => {
    const {id} = req.body;
    const supplier = await findSupplierById(id);
    return res.status(201).json(supplier);
};

export const findManySuppliersByName = async (req:Request, res:Response) => {
    const {name} = req.body;
    const supplier = await findSuppliersByName(name);
    return res.status(201).json(supplier);
};

export const updateASupplierById = async (req:Request, res:Response) => {
    const {id, name, type, emaial, telephone, address} = req.body;
    const supplier = await updateSupplierById(id, name, type, emaial, telephone, address);
    return res.status(201).json(supplier);
};

export const deleteASupplierById = async (req:Request, res:Response) => {
    const {id} = req.body;
    const supplier = await deleteSupplierById(id);
};