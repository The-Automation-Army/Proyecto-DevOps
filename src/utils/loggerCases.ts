import { logger } from "./logger";
import MaskData from "maskdata";

export const debugApi = (method: string, params: any = {}, body: any = {}) => {
  logger.debug(
    `Method: ${method}, Params: ${JSON.stringify(
      params
    )}, Body: ${JSON.stringify(body)}`
  );
};

export const warnEntityNotFound = () => {
  logger.warn("Entity not found");
};

const jsonMaskConfig = {
  emailFields: ["email"],
  passwordFields: ["password"],
  phoneFields: ["phone", "number", "telephone"],
};

export const debugRequestBody = (fName: string, params: any = {}, obj: any) => {
  const maskedJsonOutput = MaskData.maskJSON2(obj, jsonMaskConfig);
  logger.debug(
    `Method: ${fName}, Params: ${JSON.stringify(
      params
    )}, Body: ${JSON.stringify(maskedJsonOutput)}`
  );
};
