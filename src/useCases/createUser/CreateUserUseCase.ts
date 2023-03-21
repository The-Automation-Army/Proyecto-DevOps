import { client } from "../../database/prismaClient";
import { hash } from "bcryptjs";

interface IUserRequest {
  username: string;
  email: string;
  password: string;
}

class CreateUserUseCase {
  async execute({ username, email, password }: IUserRequest) {
    const userAlreadyExists = await client.user.findFirst({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const passwordHash = await hash(password, 8);
    const user = await client.user.create({
      data: {
        username,
        email,
        password: passwordHash,
      },
    });

    return user;
  }
}

export { CreateUserUseCase };
