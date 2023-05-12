import winston, { format } from "winston";

const logFormat = format.printf(({ level, message, timestamp }) => {
  const format = `[${level.toUpperCase()}] ${timestamp} ${message}`.replace(/\n/g, '');
  return format;
});

export const logger = winston.createLogger({
  level: "debug",
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    logFormat
  ),
  transports: [
    new winston.transports.Console({ level: "debug" }),
    new winston.transports.File({
      level: "debug",
      filename: "logs/zooapi.log",
    }),
  ],
});
