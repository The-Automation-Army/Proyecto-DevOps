import { Router } from "express";
import { userRoutes } from "./v1/routes/user.routes";

const router = Router();
router.use(userRoutes);

export { router };
