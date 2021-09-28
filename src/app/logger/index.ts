import pino from "pino";
import config from "../config";
export const logger: pino.Logger = pino({ level: config.logger.LOG_LEVEL });
