import prisma from "../../libs/prisma";
import { ISupplierRequest } from "../dtos/supplier.dto";

//Creation of one supplier.
export const create = async (supplier: ISupplierRequest) => {
  const newSupplier = await prisma.supplier.create({
    data: supplier,
  });
  return newSupplier;
};

//Read (query) of all suppliers.
export const findAll = async () => {
  const suppliers = await prisma.supplier.findMany({});
  return suppliers;
};

//Read (query) a unique supplier via its ID.
export const find = async (supplierId: number) => {
  const findSupplier = await prisma.supplier.findUnique({
    where: {
      id: supplierId,
    },
  });
  return findSupplier;
};

//Update of a supplier via its ID.
export const update = async (
  supplierId: number,
  fieldsToUpdate: Partial<ISupplierRequest>
) => {
  const supplier = await prisma.supplier.update({
    where: {
      id: supplierId,
    },
    data: { ...fieldsToUpdate },
  });
  return supplier;
};

//Delete of a supplier via its ID.
export const remove = async (supplierId: number) => {
  const deletedSupplier = await prisma.supplier.delete({
    where: {
      id: supplierId,
    },
  });

  return deletedSupplier;
};
