import express, { Express } from "express";
import shortenRoutes from "./routes/shorten.routes";
import cors from "cors";
import ErrorHandler from "./middlewares/errorHandler";
import { envs } from "./config/envs";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT: number = envs.port;

app.use("/shorten", shortenRoutes);

app.use(ErrorHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
