import { Router } from "express";
import { userRoutes } from "./v1/routes/user.routes";
import { animalRoutes } from "./v1/routes/animal.routes";
import { habitatRoutes } from "./v1/routes/habitat.routes";
import { supplierRoutes } from "./v1/routes/supplier.routes";
import { zookeeperRoutes } from "./v1/routes/zookeeper.routes";

const router = Router();
router.use(userRoutes);
router.use('/animal', animalRoutes);
router.use('/habitat', habitatRoutes);
router.use('/supplier', supplierRoutes);
router.use('/zookeeper', zookeeperRoutes);

export { router };
