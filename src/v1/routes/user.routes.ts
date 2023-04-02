import { Router } from "express";
import {
  getAll,
  getUser,
  deleteUser,
  signIn,
  signUp,
  updateUser,
} from "../../controllers/user.controller";
import { ensureAuthenticated } from "../../middlewares/authentication";
import { Commons } from "./Commons";

const userRoutes = Router();

userRoutes.post("/login", signIn);
userRoutes.post("/register", signUp);
userRoutes.get("/users", ensureAuthenticated, getAll);
userRoutes.get("/users/:id", ensureAuthenticated, getUser);
userRoutes.delete("/users/:id", ensureAuthenticated, deleteUser);
userRoutes.put("/users/:id", ensureAuthenticated, updateUser);
userRoutes.all("/users", Commons.methodNotAllowed);

export { userRoutes };
