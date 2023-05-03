import prisma from "../../libs/prisma";
import { ISupplierRequest } from "../dtos/supplier.dto";

//Creation of one supplier.
export async function createSupplier(supplier: ISupplierRequest) {
  const newSupplier = await prisma.supplier.create({
    data: supplier,
  });
  return newSupplier;
}

//Read (query) of all suppliers.
export async function findAllSuppliers() {
  const suppliers = await prisma.supplier.findMany({});
  return suppliers;
}

//Read (query) a unique supplier via its ID.
export async function findSupplierById(supplierId: number) {
  const findSupplier = await prisma.supplier.findUnique({
    where: {
      id: supplierId,
    },
  });
  return findSupplier;
}

//Read (query) of many suppliers via their names.
export async function findSuppliersByName(term: string) {
  const suppliers = await prisma.supplier.findMany({
    where: {
      name: {
        contains: term,
        mode: "insensitive",
      },
    },
  });
  return suppliers;
}

//Update of a supplier via its ID.
export async function updateSupplierById(
  fieldsToUpdate: Partial<ISupplierRequest>
) {
  const supplier = await prisma.supplier.update({
    where: {
      id: fieldsToUpdate.id,
    },
    data: { ...fieldsToUpdate },
  });
  return supplier;
}

//Delete of a supplier via its ID.
export async function deleteSupplierById(supplierId: number) {
  const deletedSupplier = await prisma.supplier.delete({
    where: {
      id: supplierId,
    },
  });

  return deletedSupplier;
}
