import express, { Express } from "express";
import shortenRoutes from "./routes/shorten.routes";
import cors from "cors";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT: number = 3000;

app.use("/shorten", shortenRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
