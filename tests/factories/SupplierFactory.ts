import { Type } from "@prisma/client";
import prisma from "../../libs/__mocks__/prisma";

export const SupplierFactory = {
  build: (attrs = {}) => {
    return {
      id: 1,
      name: "fake-supplier-name",
      type: Type.service,
      email: "fake@example.com",
      telephone: "899243343",
      address: "72 Street",
      ...attrs,
    };
  },
  create: (attrs = {}) => {
    const supplierMock = SupplierFactory.build(attrs);
    prisma.supplier.create.mockResolvedValue(supplierMock);
    return supplierMock;
  },
  findAll: () => {
    const suppliers = [
      SupplierFactory.build({ id: 1, email: "john@supplier.com" }),
      SupplierFactory.build({ id: 2, email: "rich@supplier.com" }),
    ];
    prisma.supplier.findMany.mockResolvedValue(suppliers);
    return suppliers;
  },
  find: (attrs = {}) => {
    const supplier = SupplierFactory.create(attrs);
    prisma.supplier.findUnique.mockResolvedValue(supplier);
    return supplier;
  },
  findBy: (attrs = {}) => {
    const suppliers = [
      SupplierFactory.build({
        id: 4,
        ...attrs,
      }),
      SupplierFactory.build({
        id: 9,
        ...attrs,
      }),
      SupplierFactory.build({
        id: 11,
        ...attrs,
      }),
    ];
    prisma.supplier.findMany.mockResolvedValue(suppliers);
    return suppliers;
  },
  update(attrs = {}) {
    const supplierMock = SupplierFactory.build(attrs);
    prisma.supplier.update.mockResolvedValue(supplierMock);
    return supplierMock;
  },
  delete(attrs = {}) {
    const supplierMock = SupplierFactory.build(attrs);
    prisma.supplier.delete.mockResolvedValue(supplierMock);
    return supplierMock;
  },
};
