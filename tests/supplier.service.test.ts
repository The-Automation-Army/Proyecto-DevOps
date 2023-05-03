import { describe, expect, it, vi } from "vitest";
import { SupplierFactory } from "./factories/SupplierFactory";
import * as SupplierService from "../src/services/supplier.service";
vi.mock("../libs/prisma");

describe("Supplier service", () => {
  it("findAll should return all stored suppliers", async () => {
    const mockSuppliers = SupplierFactory.findAll();
    const suppliers = await SupplierService.findAll();

    expect(suppliers).toStrictEqual(mockSuppliers);
    expect(suppliers.length).toBe(2);
  });

  it("find should return a supplier given a id", async () => {
    const mockSupplier = SupplierFactory.find({ id: 8 });
    const findSupplier = await SupplierService.find(8);

    expect(findSupplier).toStrictEqual(mockSupplier);
  });

  it("create should return the stored supplier", async () => {
    const mockSupplier = SupplierFactory.create();
    const supplier = await SupplierService.create(mockSupplier);

    expect(supplier).toStrictEqual({ ...mockSupplier, id: 1 });
  });

  it("update should return updated the supplier's fields", async () => {
    const data = {
      name: "John",
      address: "Central Park 72nd Street",
    };
    const mockSupplier = SupplierFactory.update(data);
    const updatedSupplier = await SupplierService.update(1, data);

    expect(updatedSupplier).toStrictEqual(mockSupplier);
  });

  it("remove should deleted supplier", async () => {
    const supplierToDelete = SupplierFactory.delete({ id: 3 });
    const deletedUser = await SupplierService.remove(3);

    expect(deletedUser).toStrictEqual(supplierToDelete);
  });
});
