import { Request, Response } from "express";
import dotenv from "dotenv";
import "reflect-metadata";
import { dataSourceInit } from "./db/init";
import { createExpressServer } from "routing-controllers";
import path from "path";

dotenv.config();

(async function bootstrap() {
  await dataSourceInit();

  const app = createExpressServer({
    controllers: [path.join(__dirname + "/controllers/*.ts")],
  });
  const port = process.env.PORT || 5001;

  app.get("/", (_: Request, res: Response) => {
    res.send("Hello!");
  });

  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
})();
