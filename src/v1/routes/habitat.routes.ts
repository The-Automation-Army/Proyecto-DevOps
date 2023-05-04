import { Router } from "express";
import * as HabitatController from "../../controllers/habitat.controller";
import { Commons } from "./Commons";
import { ensureAuthenticated } from "../../middlewares/authentication";

const habitatRoutes = Router();

habitatRoutes
  .get("/", ensureAuthenticated, HabitatController.getAllHabitats)
  .get("/:id", ensureAuthenticated, HabitatController.getOneHabitat)
  .post("/", ensureAuthenticated, HabitatController.createNewHabitat)
  .put("/:id", ensureAuthenticated, HabitatController.updateOneHabitat)
  .delete("/:id", ensureAuthenticated, HabitatController.deleteOneHabitat)
  .all("/", Commons.methodNotAllowed);

export { habitatRoutes };
