import { NextFunction, Request, Response } from "express";
import { logger } from "../utils/logger";

interface ErrorParams {
  req: Request;
  res: Response;
  next: NextFunction;
  errorMessage: Error;
}

export const errorHandler = ({ req, res, next, errorMessage }: ErrorParams) => {
  logger.error(`Server Error: ${JSON.stringify(errorMessage)}`);
  res.status(500).json({ message: errorMessage });
  return next();
};
