import express, { Express } from "express";
import shortenRoutes from "./routes/shorten.routes";
const app: Express = express();

app.use(express.json());

const PORT: number = 3000;

app.use("/shorten", shortenRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
