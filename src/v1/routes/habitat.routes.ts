import { Router } from "express";
import { createNewHabitat, deleteAnHabitatById, findAnHabitatById, findManyHabitatsByArea, findManyHabitatsByCapacity, findManyHabitatsByCategory, findManyHabitatsBySize, updateAnHabitatById } from "../../controllers/habitat.controller";
import { ensureAuthenticated } from "../../middlewares/authentication";

const habitatRoutes = Router();

habitatRoutes.post("/newHabitat", ensureAuthenticated, createNewHabitat);
habitatRoutes.get("/findHabitatById", findAnHabitatById);
habitatRoutes.get("/findHabitatsByCategory", findManyHabitatsByCategory);
habitatRoutes.get("/findHabitatsBySize", findManyHabitatsBySize);
habitatRoutes.get("/findHabitatsByCapacity", findManyHabitatsByCapacity);
habitatRoutes.get("/findHabitatsByArea", findManyHabitatsByArea);
habitatRoutes.put("/updateHabitatById", ensureAuthenticated, updateAnHabitatById);
habitatRoutes.delete("/deleteHabitat", ensureAuthenticated, deleteAnHabitatById)

export { habitatRoutes };
