import { NextFunction, Request, Response } from "express";

export class Commons {
  static methodNotAllowed = (_req: Request, res: Response, _next: NextFunction) => {
    res.status(405).json({ message: "Unsupported method" });
  };
}
