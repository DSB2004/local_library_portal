import { Request, Response, NextFunction } from "express";

const LoggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const method = req.method;
  const url = req.originalUrl;
  const timestamp = new Date().toISOString();

  console.log(`[${timestamp}] ${method} ${url}`);

  next();
};

export default LoggerMiddleware;
