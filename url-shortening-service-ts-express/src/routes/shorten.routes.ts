import { Request, Response, Router } from "express";

const routes: Router = Router();

routes.get("/", (_req: Request, res: Response) => {
  res.send("User");
});
routes.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("User");
});

routes.patch("/", (_req: Request, res: Response) => {
  res.send("User");
});

routes.delete("/", (_req: Request, res: Response) => {
  res.send("User");
});

export default routes;
