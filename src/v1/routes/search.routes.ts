import { Router } from "express";
import { findManySuppliersByName } from "../../controllers/supplier.controller";
import { Commons } from "./Commons";
const searchRoutes = Router();

searchRoutes.get("/suppliers", findManySuppliersByName);
searchRoutes.all("/", Commons.methodNotAllowed);
export { searchRoutes };
