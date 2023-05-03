import { Router } from "express";
import { Commons } from "./Commons";
import { ensureAuthenticated } from "../../middlewares/authentication";
import * as ZookeeperController from "../../controllers/zookeeper.controller";

const zookeeperRoutes = Router();

zookeeperRoutes
  .get("/", ensureAuthenticated, ZookeeperController.getAllZookeepers)
  .get("/:id", ensureAuthenticated, ZookeeperController.getOneZookeeper)
  .post("/", ensureAuthenticated, ZookeeperController.createNewZookeeper)
  .put("/:id", ensureAuthenticated, ZookeeperController.updateOneZookeeper)
  .delete("/:id", ensureAuthenticated, ZookeeperController.deleteOneZookeeper)
  .all("/", Commons.methodNotAllowed);

export { zookeeperRoutes };
