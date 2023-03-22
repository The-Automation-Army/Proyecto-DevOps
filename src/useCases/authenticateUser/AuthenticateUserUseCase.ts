import { client } from "../../database/prismaClient";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { JWT } from "../../utils/jwt";

interface IRequest {
  email: string;
  password: string;
}

class AuthenticateUserUseCase {
  async execute({ email, password }: IRequest) {
    const userAlreadyExists = await client.user.findFirst({
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
  }
}

export { AuthenticateUserUseCase };
