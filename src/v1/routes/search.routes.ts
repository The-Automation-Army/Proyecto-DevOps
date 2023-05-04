import { Router } from "express";
import { Commons } from "./Commons";
import { ensureAuthenticated } from "../../middlewares/authentication";
import * as SearchController from "../../controllers/search.controller";

const searchRoutes = Router();

searchRoutes
  .get("/animals", ensureAuthenticated, SearchController.findAnimals)
  .get("/habitats", ensureAuthenticated, SearchController.findHabitats)
  .get("/suppliers", ensureAuthenticated, SearchController.findSuppliers)
  .all("/", Commons.methodNotAllowed);

export { searchRoutes };
