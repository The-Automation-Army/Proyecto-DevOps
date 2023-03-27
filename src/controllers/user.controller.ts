import { Request, Response } from "express";
import { authUser, createUser, getAllUsers } from "../services/user.service";

export const getAll = async (_req: Request, res: Response) => {
  const allUsers = await getAllUsers();
  return res.status(200).json(allUsers);
};

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const token = await authUser({
    email,
    password,
  });

  return res.status(200).json(token);
};

export const signUp = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const user = await createUser({
    username,
    email,
    password,
  });
  return res.status(200).json(user);
};
