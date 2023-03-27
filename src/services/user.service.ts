import { User } from "@prisma/client";
import prisma from "../../libs/prisma";
import { JWT } from "../utils/jwt";
import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { ILoginRequest, IUserRequest } from "../dtos/user.dto";

export const getAllUsers = async () => {
  try {
    const allUsers: User[] = await prisma.user.findMany();
    return allUsers;
  } catch (error) {
    throw new Error("Users are not found");
  }
};

export const authUser = async ({ email, password }: ILoginRequest) => {
  const userAlreadyExists = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!userAlreadyExists) {
    throw new Error("Email or password incorrect!");
  }

  const passwordMatch = await compare(password, userAlreadyExists.password);
  if (!passwordMatch) {
    throw new Error("Email or password incorrect!");
  }

  const token = sign({}, JWT.ACCESS_TOKEN, {
    subject: `${userAlreadyExists.id}`,
    expiresIn: JWT.EXPIRATION_TIME,
  });

  return token;
};

export const createUser = async ({
  username,
  email,
  password,
}: IUserRequest) => {
  const userAlreadyExists = await prisma.user.findFirst({
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
