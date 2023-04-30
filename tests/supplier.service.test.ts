import { describe, expect, it, vi } from "vitest";
import { SupplierFactory } from "./factories/SupplierFactory";
import {
  createSupplier,
  deleteSupplierById,
  findAllSuppliers,
  findSupplierById,
  findSuppliersByName,
  updateSupplierById,
} from "../src/services/supplier.service";
vi.mock("../libs/prisma");

describe("Supplier service", () => {
  it("createSupplier should return the stored supplier", async () => {
    const mockSupplier = SupplierFactory.create();
    const supplier = await createSupplier(mockSupplier);

    expect(supplier).toStrictEqual({ ...mockSupplier, id: 1 });
  });

  it("findAllSuppliers should return all stored suppliers", async () => {
    const mockSuppliers = SupplierFactory.finAll();
    const suppliers = await findAllSuppliers();

    expect(suppliers).toStrictEqual(mockSuppliers);
    expect(suppliers.length).toBe(2);
  });

  it("findSupplierById should return a supplier given a id", async () => {
    const mockSupplier = SupplierFactory.findById({ id: 8 });
    const findSupplier = await findSupplierById(8);

    expect(findSupplier).toStrictEqual(mockSupplier);
  });

  it("findSuppliersByName should return all matched suppliers given a term", async () => {
    const mockSupplier = SupplierFactory.findByName({
      name: "Fake-term-insensitive",
    });
    const suppliers = await findSuppliersByName("fake-term");
    expect(suppliers).toStrictEqual(mockSupplier);
    expect(suppliers.length).toBe(3);
  });

  it("UpdateSupplierById should update the supplier's fields", async () => {
    const data = {
      name: "John",
      address: "Central Park 72nd Street",
    };
    const mockSupplier = SupplierFactory.update(data);
    const updatedSupplier = await updateSupplierById({
      id: 1,
      ...data,
    });

    expect(updatedSupplier).toStrictEqual(mockSupplier);
  });

  it("deleteSupplierById should update the supplier's fields", async () => {
    const supplierToDelete = SupplierFactory.delete({ id: 3 });
    const deletedUser = await deleteSupplierById(3);

    expect(deletedUser).toStrictEqual(supplierToDelete);
  });
});
