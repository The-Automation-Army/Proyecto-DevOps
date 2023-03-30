import { Router } from "express";
import { userRoutes } from "./v1/routes/user.routes";
import { animalRoutes } from "./v1/routes/animal.routes";

const router = Router();
router.use(userRoutes);
router.use('/animal', animalRoutes)

export { router };
