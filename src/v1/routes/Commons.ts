import { NextFunction, Request, Response } from "express";
import { logger } from "../../utils/logger";

export class Commons {
  static methodNotAllowed = (
    req: Request,
    res: Response,
    _next: NextFunction
  ) => {
    logger.error(`Unsupported method: ${req.method}, url: ${req.url}`);
    res.status(405).json({ message: "Unsupported method" });
  };

  static apiLogger = (req: Request, res: Response, next: NextFunction) => {
    logger.info(
      `(ZOO APP) Method: ${req.method}, URL: ${req.url}, Query Parameters: ${JSON.stringify(
        req.params
      )}, Headers: ${JSON.stringify(req.headers)}`
    );
    return next();
  };
}
