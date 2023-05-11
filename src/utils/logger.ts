import winston, { format } from "winston";

const logFormat = format.printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

export const logger = winston.createLogger({
  level: "debug",
  format: format.combine(format.timestamp(), logFormat),
  transports: [
    new winston.transports.Console({ level: "debug" }),
    new winston.transports.File({ level: "debug", filename: "logs/zooapi.log" }),
  ],
});
