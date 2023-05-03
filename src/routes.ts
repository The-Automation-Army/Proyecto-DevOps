import { Router } from "express";
import { userRoutes } from "./v1/routes/user.routes";
import { animalRoutes } from "./v1/routes/animal.routes";
import { habitatRoutes } from "./v1/routes/habitat.routes";
import { supplierRoutes } from "./v1/routes/supplier.routes";
import { zookeeperRoutes } from "./v1/routes/zookeeper.routes";
import { searchRoutes } from "./v1/routes/search.routes";

const router = Router();
router.use(userRoutes);
router.use("/animals", animalRoutes);
router.use("/habitats", habitatRoutes);
router.use("/search", searchRoutes);
router.use("/suppliers", supplierRoutes);
router.use("/zookeepers", zookeeperRoutes);

export { router };
