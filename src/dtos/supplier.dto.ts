import { Type } from "@prisma/client";

export interface ISupplierRequest {
  id?: number;
  name: string;
  type: Type;
  email: string;
  telephone: string;
  address: string;
}
