import { Request, Response } from "express";
import {
  authUser,
  createUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUserById,
} from "../services/user.service";

export const getAll = async (_req: Request, res: Response) => {
  const allUsers = await getAllUsers();

  return res.status(200).json(allUsers);
};

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const token = await authUser({
      email,
      password,
    });

    return res.status(200).json(token);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const signUp = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    const user = await createUser({
      username,
      email,
      password,
    });

    return res.status(201).json(user);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteUserById(Number(id));
    return res.status(200).json({ message: "User deleted" });
  } catch (error: any) {
    return res
      .status(404)
      .json({ message: `User with id: ${id} doesn't exist` });
  }
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await getUserById(Number(id));
  if (!user) {
    return res
      .status(404)
      .json({ message: `User with id: ${id} doesn't exist` });
  }
  return res.status(200).json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username } = req.body;

  try {
    const updatedUser = await updateUserById(Number(id), username);
    return res.status(200).json(updatedUser);
  } catch (error: any) {
    return res
      .status(404)
      .json({ message: `User with id: ${id} doesn't exist` });
  }
};
