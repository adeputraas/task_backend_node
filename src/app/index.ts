import { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { logger } from "./logger";
import routes from "./routes";

export default (app: Application): void => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // API Handling
  let key: keyof typeof routes;
  for (key in routes) {
    app.use("/api", routes[key]);
  }

  // TODO:ERROR HANDLING & SWAGGER FOR TESTING

  // Unhandling Rejection Expection
  process.on("unhandledRejection", (reason: string, p: Promise<unknown>) => {
    logger.fatal(p, "unhandled Promise Rejection");
    throw reason;
  });

  process.on("uncaughtException", (error: Error) => {
    logger.fatal(error, "uncaught exception");
    process.exit(1);
  });
};
