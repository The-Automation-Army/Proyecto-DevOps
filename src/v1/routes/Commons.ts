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
      `METHOD: ${req.method}, URL: ${req.url}, QUERYPARAMS: ${JSON.stringify(
        req.params
      )}, HEADERS: ${JSON.stringify(req.headers)}`
    );
    return next();
  };
}
