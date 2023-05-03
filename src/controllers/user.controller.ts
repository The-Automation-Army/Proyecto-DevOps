import { Request, Response } from "express";
import * as UserService from "../services/user.service";

export const getAllUsers = async (_req: Request, res: Response) => {
  const allUsers = await UserService.findAll();
  return res.status(200).json(allUsers);
};

export const getOneUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = await UserService.find(id);
  if (!user) {
    return res
      .status(404)
      .json({ message: `User with id: ${id} doesn't exist` });
  }
  return res.status(200).json(user);
};

export const createNewUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    const user = await UserService.create({
      username,
      email,
      password,
    });
    return res.status(201).json(user);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const token = await UserService.login({
      email,
      password,
    });
    return res.status(200).json(token);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const updateOneUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { username } = req.body;

  try {
    const updatedUser = await UserService.update(id, username);
    return res.status(200).json(updatedUser);
  } catch (error: any) {
    return res
      .status(404)
      .json({ message: `User with id: ${id} doesn't exist` });
  }
};

export const deleteOneUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await UserService.remove(Number(id));
    return res.status(200).json({ message: "User deleted" });
  } catch (error: any) {
    return res
      .status(404)
      .json({ message: `User with id: ${id} doesn't exist` });
  }
};
