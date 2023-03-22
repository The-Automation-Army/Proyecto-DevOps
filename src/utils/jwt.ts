import * as dotenv from "dotenv";
dotenv.config();

export const JWT = {
  EXPIRATION_TIME: process.env.EXPIRATION_TIME as string,
  ACCESS_TOKEN: process.env.JWT_ACCESS_SECRET as string,
};
