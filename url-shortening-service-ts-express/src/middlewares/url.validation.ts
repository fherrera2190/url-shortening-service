import { NextFunction, Request, Response } from "express";
import { urlSchema } from "../schemas/url.schema";

export const urlValidation = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const { error } = urlSchema.validate(req.body);
  const err = {
    message: error?.details.map((err) => err.message),
    statusCode: 400,
  };
  if (error) throw err;

  next();
};
