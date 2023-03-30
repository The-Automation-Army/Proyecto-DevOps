import { Router } from "express";
import { createNewZookeeper, deleteAZookeeperById, findAZookeeperById, findZookeepers, updateAZookeeperById } from "../../controllers/zookeeper.controller";
import { ensureAuthenticated } from "../../middlewares/authentication";

const zookeeperRoutes = Router();

zookeeperRoutes.post("/newZookeeper", ensureAuthenticated, createNewZookeeper);
zookeeperRoutes.get("findAllZookeepers", findZookeepers);
zookeeperRoutes.get("/findZookeeperById", findAZookeeperById);
zookeeperRoutes.put("/updateZookeeperById", ensureAuthenticated, updateAZookeeperById);
zookeeperRoutes.delete("/deleteZookeeperById", ensureAuthenticated, deleteAZookeeperById);

export { zookeeperRoutes };
