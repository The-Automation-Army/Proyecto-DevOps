import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { JWT } from "../utils/jwt";
import { logger } from "../utils/logger";

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    logger.warn("401 Unauthorized, Token is missing");
    return response.status(401).json({
      message: "Token is missing!",
    });
  }

  const [, token] = authToken.split(" ");
  try {
    verify(token, JWT.ACCESS_TOKEN);
    return next();
  } catch (error) {
    logger.warn("401 Unauthorized, invalid token");
    return response.status(401).json({
      message: "Token invalid!",
    });
  }
}
