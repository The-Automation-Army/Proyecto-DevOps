import { Router } from "express";
import {
  createNewSupplier,
  deleteASupplierById,
  findAnSupplierById,
  findSuppliers,
  updateASupplierById,
} from "../../controllers/supplier.controller";
import { ensureAuthenticated } from "../../middlewares/authentication";
import { Commons } from "./Commons";

const supplierRoutes = Router();

supplierRoutes
  .get("/", findSuppliers)
  .get("/:id", ensureAuthenticated, findAnSupplierById)
  .post("/", ensureAuthenticated, createNewSupplier)
  .put("/:id", ensureAuthenticated, updateASupplierById)
  .delete("/:id", ensureAuthenticated, deleteASupplierById)
  .all("/", Commons.methodNotAllowed);

export { supplierRoutes };
