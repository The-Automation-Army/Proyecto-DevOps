import { Router } from "express";
import { getAll, signIn, signUp } from "../../controllers/user.controller";
import { ensureAuthenticated } from "../../middlewares/authentication";

const userRoutes = Router();

userRoutes.post("/register", signUp);
userRoutes.post("/login", signIn);
userRoutes.get("/users", ensureAuthenticated, getAll);

export { userRoutes };
