import { Supplier, Type } from "@prisma/client";
import prisma from "../../libs/prisma";

//Creation of one supplier.
async function createSupplier(name:string, type:Type, email:string, telephone:string, address:string) {
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
async function findSupplierById(id:number) {
    const supplier = await prisma.supplier.findUnique({
        where: {
            supplier_id:id,
        },
    });
    return supplier;
;}

//Read (query) of many suppliers via their names.
async function findSupplierByName(suplierName:string) {
    const suppliers = await prisma.supplier.findMany({
        where: {
            name:suplierName,
        },
    });
    return suppliers;
;}

//Update of an supplier via its ID.
async function updateSupplierById() {
    //Developing.
}

//Delete of an supplier via its ID.
async function deleteSupplierById() {
    //Developing.
}