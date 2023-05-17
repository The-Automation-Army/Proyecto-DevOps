import { Request, Response } from "express";
import * as UserService from "../services/user.service";
import { logger } from "../utils/logger";
import {
  debugApi,
  debugRequestBody,
  warnEntityNotFound,
} from "../utils/loggerCases";

export const getAllUsers = async (req: Request, res: Response) => {
  debugApi("getAllUsers", req.params);
  const allUsers = await UserService.findAll();
  return res.status(200).json(allUsers);
};

export const getOneUser = async (req: Request, res: Response) => {
  debugApi("getOneUser", req.params);
  const id = Number(req.params.id);
  const user = await UserService.find(id);
  if (!user) {
    warnEntityNotFound();
    return res
      .status(404)
      .json({ message: `User with id: ${id} doesn't exist` });
  }
  return res.status(200).json(user);
};

export const createNewUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  debugRequestBody("createNewUser", req.params, { username, email, password });
  try {
    const user = await UserService.create({
      username,
      email,
      password,
    });
    return res.status(201).json(user);
  } catch (error: any) {
    logger.warn("Missing or incorrect fields");
    return res.status(400).json({ message: "Missing or incorrect fields" });
  }
};

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  debugApi("signIn", req.params, email);
  try {
    const token = await UserService.login({
      email,
      password,
    });
    return res.status(200).json({ token: token });
  } catch (error: any) {
    logger.warn(error);
    return res.status(400).json({ message: error.message });
  }
};

export const updateOneUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { username } = req.body;
  debugApi("updateOneUser", req.params, username);
  try {
    const updatedUser = await UserService.update(id, username);
    return res.status(200).json(updatedUser);
  } catch (error: any) {
    warnEntityNotFound();
    return res
      .status(404)
      .json({ message: `User with id: ${id} doesn't exist` });
  }
};

export const deleteOneUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  debugApi("deleteOneUser", req.params);
  try {
    await UserService.remove(Number(id));
    return res.status(200).json({ message: "User deleted" });
  } catch (error: any) {
    warnEntityNotFound();
    return res
      .status(404)
      .json({ message: `User with id: ${id} doesn't exist` });
  }
};
