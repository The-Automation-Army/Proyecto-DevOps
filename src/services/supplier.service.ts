import { Supplier, Type } from "@prisma/client";
import { type } from "os";
import prisma from "../../libs/prisma";

//Creation of one supplier.
export async function createSupplier(name:string, type:Type, email:string, telephone:string, address:string) {
    const supplier = await prisma.supplier.create({
        data: {
            name,
            type,
            email,
            telephone,
            address
        },
    });
    return supplier;
};

//Read (query) a unique supplier via its ID.
export async function findSupplierById(id:number) {
    const supplier = await prisma.supplier.findUnique({
        where: {
            supplier_id:id,
        },
    });
    return supplier;
;}

//Read (query) of many suppliers via their names.
export async function findSupplierByName(suplierName:string) {
    const suppliers = await prisma.supplier.findMany({
        where: {
            name:suplierName,
        },
    });
    return suppliers;
;}

//Update of a supplier via its ID.
export async function updateSupplierById(id:number, modName:string, modType:Type, modEmail:string, modTelephone:string, modAddress:string) {
    const supplier = await prisma.supplier.update({
        where: {
            supplier_id: id,
        },
        data: {
            name: modName,
            type: modType,
            email: modEmail,
            telephone: modTelephone,
            address: modAddress,
        },
    });
};

//Delete of a supplier via its ID.
export async function deleteSupplierById(id:number) {
    const supplier = await prisma.supplier.delete({
        where: {
            supplier_id:id,
        },
    });
}