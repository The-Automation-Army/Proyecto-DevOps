import { Area, Category } from "@prisma/client";

export type AnimalQueryParams = {
  name?: string;
  category?: Category;
};

export type HabitatQueryParams = {
  area?: Area;
};

export type SupplierQueryParams = {
  name?: string;
};
