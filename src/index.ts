import express, { Request, Response, NextFunction } from "express";
export const app = express();

app.get("/", (_req: Request, res: Response, _next: NextFunction): Response => {
  return res.status(200).json({ message: "Hello from root!" });
});

app.use((_req: Request, res: Response, _next: NextFunction) => {
  res.status(404).json({ message: "Not Found" });
});
