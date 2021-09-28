import express from "express";
import config from "./app/config";
import { logger } from "./app/logger";
import loaderApp from "./app";

// import loaderApp from './app';

const app = express();

// Load App
loaderApp(app);

app.listen(config.app.PORT as number, config.app.HOST, () => {
  logger.info({}, `Server Listen on ${config.app.HOST}:${config.app.PORT}`);
});
