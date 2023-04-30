import { Router } from "express";
import { Commons } from "./Commons";
import { findManySuppliersByName } from "../../controllers/supplier.controller";
const searchRoutes = Router();

searchRoutes.get("/suppliers", findManySuppliersByName);
searchRoutes.all("/", Commons.methodNotAllowed);
export { searchRoutes };
