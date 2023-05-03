import { Router } from "express";
import * as AnimalController from "../../controllers/animal.controller";
import { Commons } from "./Commons";
import { ensureAuthenticated } from "../../middlewares/authentication";

const animalRoutes = Router();

animalRoutes
  .get("/", ensureAuthenticated, AnimalController.getAllAnimals)
  .get("/:id", ensureAuthenticated, AnimalController.getOneAnimal)
  .post("/", ensureAuthenticated, AnimalController.createNewAnimal)
  .put("/:id", ensureAuthenticated, AnimalController.updateOneAnimal)
  .delete("/:id", ensureAuthenticated, AnimalController.deleteOneAnimal)
  .all("/", Commons.methodNotAllowed);

export { animalRoutes };
