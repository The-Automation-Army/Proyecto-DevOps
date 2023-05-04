import { Router } from "express";
import { Commons } from "./Commons";
import { ensureAuthenticated } from "../../middlewares/authentication";
import * as UserController from "../../controllers/user.controller";

const userRoutes = Router();

userRoutes.post("/login", UserController.signIn);
userRoutes.post("/register", UserController.createNewUser);
userRoutes.get("/users", ensureAuthenticated, UserController.getAllUsers);
userRoutes.get("/users/:id", ensureAuthenticated, UserController.getOneUser);
userRoutes.put("/users/:id", ensureAuthenticated, UserController.updateOneUser);
userRoutes.delete(
  "/users/:id",
  ensureAuthenticated,
  UserController.deleteOneUser
);
userRoutes.all("/users", Commons.methodNotAllowed);

export { userRoutes };
