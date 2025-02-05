import { NextFunction, Request, Response } from "express";
import { urlServices } from "../services/url.services";

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { url } = req.body;

    const result = await urlServices.create(url);

    res.status(201).send(result);
  } catch (err) {
    next(err); // Pasa el error al middleware de manejo de errores
  }
};

const findByShortCode = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const shortCode = req.params.shortCode.trim();
    console.log(shortCode);
    if (!shortCode)
      throw { message: "Short code is required", statusCode: 400 };

    const result = await urlServices.findByShortCode(shortCode);
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

export const urlController = { create, findByShortCode };
