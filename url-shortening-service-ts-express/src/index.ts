import express, { Express, Request, Response } from "express";

const app: Express = express();
app.use(express.json());

const PORT: number = 3000;

app.get("/ping", (_req: Request, res: Response) => {

  res.send("NE   asMESIS");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


