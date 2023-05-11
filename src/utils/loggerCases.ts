import { logger } from "./logger";

export const debugApi = (method: string, params: any = {}, body: any = {}) => {
  logger.debug(
    `method: ${method}, params: ${JSON.stringify(
      params
    )}, body: ${JSON.stringify(body)}`
  );
};

export const warnEntityNotFound = () => {
  logger.warn("Entity not found");
};
