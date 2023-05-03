import prisma from "../../libs/prisma";
import {
  AnimalQueryParams,
  HabitatQueryParams,
  SupplierQueryParams,
} from "../dtos/query.dto";

//Read (query) of many animals via its name.
export const findAnimalsBy = async (queryParams: AnimalQueryParams) => {
  const animals = await prisma.animal.findMany({
    where: {
      OR: [
        {
          name: {
            contains: queryParams.name,
            mode: "insensitive",
          },
        },
        {
          category: queryParams.category,
        },
      ],
    },
  });

  return animals;
};

//Find habitats by area
export const findHabitatsBy = async (query: HabitatQueryParams) => {
  const habitats = await prisma.habitat.findMany({
    where: {
      OR: [
        {
          area: query.area,
        },
      ],
    },
  });
  return habitats;
};

//Read (query) of many suppliers via their names.
export const findSuppliersBy = async (query: SupplierQueryParams) => {
  const { name } = query;
  const suppliers = await prisma.supplier.findMany({
    where: {
      name: {
        contains: name,
        mode: "insensitive",
      },
    },
  });
  return suppliers;
};
