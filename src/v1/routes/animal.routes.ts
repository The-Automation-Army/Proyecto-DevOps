import { Router } from "express";
import { createNewAnimal, findAnAnimalById, findManyAnimalsByName, findManyAnimalsByCategory, updateAnAnimalById, deleteAnAnimalById } from "../../controllers/animal.controller";
import { ensureAuthenticated } from "../../middlewares/authentication";

const animalRoutes = Router();

animalRoutes.post("/newAnimal", ensureAuthenticated, createNewAnimal);
animalRoutes.get("/findAnimalById", findAnAnimalById);
animalRoutes.get("/findAnimalsByName", findManyAnimalsByName);
animalRoutes.get("/findAnimalsByCategory", findManyAnimalsByCategory);
animalRoutes.put("/updateAnimalById", ensureAuthenticated, updateAnAnimalById);
animalRoutes.delete("/deleteAnimalById", ensureAuthenticated, deleteAnAnimalById);


export { animalRoutes };
