import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import prisma from "./utils/prisma";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app: Express = express();
app.use(express.json());
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Wecolme to ITS Prdigi API course");
});

app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
