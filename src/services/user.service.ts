import prisma from "../../libs/prisma";
import { JWT } from "../utils/jwt";
import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import {
  ILoginRequest,
  IUserRequest,
  defaultUserFields,
} from "../dtos/user.dto";

export const findAll = async () => {
  const allUsers = await prisma.user.findMany({
    select: { ...defaultUserFields },
  });

  return allUsers;
};

export const login = async ({ email, password }: ILoginRequest) => {
  const userAlreadyExists = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!userAlreadyExists) {
    throw new Error("Incorrect email or password!");
  }

  const passwordMatch = await compare(password, userAlreadyExists.password);
  if (!passwordMatch) {
    throw new Error("Incorrect password!");
  }

  const token = sign({}, JWT.ACCESS_TOKEN, {
    subject: `${userAlreadyExists.id}`,
    expiresIn: JWT.EXPIRATION_TIME,
  });

  return token;
};

export const create = async ({ username, email, password }: IUserRequest) => {
  const userAlreadyExists = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (userAlreadyExists) {
    throw new Error("User already exists!");
  }

  const passwordHash = await hash(password, 8);
  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: passwordHash,
    },
  });

  return user;
};

export const remove = async (userId: number) => {
  const deletedUser = await prisma.user.delete({
    where: {
      id: userId,
    },
  });

  return deletedUser;
};

export const find = async (userId: number) => {
  const findUser = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: { ...defaultUserFields },
  });

  return findUser;
};

export const update = async (userId: number, username: string) => {
  const updatedUser = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      username,
    },
    select: {
      ...defaultUserFields,
    },
  });

  return updatedUser;
};
