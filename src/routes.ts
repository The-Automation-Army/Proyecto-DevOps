import { Router } from "express";
import { ensureAuthenticated } from "./middlewares/authentication";
import { AuthenticateUserController } from "./useCases/authenticateUser/AuthenticateUserController";

import { CreateUserController } from "./useCases/createUser/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

router.post("/register", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.get("/suppliers", ensureAuthenticated, (_request, response) => {
  return response.json([
    {
      id: 1,
      name: "Zoodiet",
    },
    {
      id: 2,
      name: "Mazuri Petting Zoo",
    },
    {
      id: 3,
      name: "Fauna Silvestre",
    },
  ]);
});

export { router };
