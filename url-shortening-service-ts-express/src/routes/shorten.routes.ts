import { Request, Response, Router } from "express";
import { urlValidation } from "../middlewares/url.validation";
import { urlController } from "../controllers/url.controller";

const shortenRoutes: Router = Router();

shortenRoutes.get("/:shortCode", urlController.findByShortCode);

shortenRoutes.post("/", urlValidation, urlController.create);

shortenRoutes.patch("/", (_req: Request, res: Response) => {
  res.send("User");
});

shortenRoutes.delete("/", (_req: Request, res: Response) => {
  res.send("User");
});

shortenRoutes.get("*", (_req: Request, res: Response) => {
  res.send("User");
});

export default shortenRoutes;
