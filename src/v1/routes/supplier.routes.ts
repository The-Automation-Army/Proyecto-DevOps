import { Router } from "express";
import { createNewSupplier, deleteASupplierById, findAnSupplierById, findManySuppliersByName, updateASupplierById } from "../../controllers/supplier.controller";
import { ensureAuthenticated } from "../../middlewares/authentication";

const supplierRoutes = Router();

supplierRoutes.post("/newSupplier", ensureAuthenticated, createNewSupplier);
supplierRoutes.get("/findSupplierById", ensureAuthenticated, findAnSupplierById);
supplierRoutes.get("/findaSuppliersByName", findManySuppliersByName);
supplierRoutes.put("/updateSupplierById", ensureAuthenticated, updateASupplierById);
supplierRoutes.delete("/deleteSupplierById", ensureAuthenticated, deleteASupplierById)

export { supplierRoutes };
