import { Router } from "express";
import { Commons } from "./Commons";
import { ensureAuthenticated } from "../../middlewares/authentication";
import * as SupplierController from "../../controllers/supplier.controller";

const supplierRoutes = Router();

supplierRoutes
  .get("/", ensureAuthenticated, SupplierController.getAllSuppliers)
  .get("/:id", ensureAuthenticated, SupplierController.getOneSupplier)
  .post("/", ensureAuthenticated, SupplierController.createNewSupplier)
  .put("/:id", ensureAuthenticated, SupplierController.updateOneSupplier)
  .delete("/:id", ensureAuthenticated, SupplierController.deleteOneSupplier)
  .all("/", Commons.methodNotAllowed);

export { supplierRoutes };
