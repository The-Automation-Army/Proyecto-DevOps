import { Animal, Area, Category, Habitat, ZookeepersCaringHabitats } from "@prisma/client";
import prisma from "../../libs/prisma";

//Creation of a habitat.
export async function createHabitat(category:Category, size:number, capacity:number, area:Area, food_percentage:number, zookeepersInfo:ZookeepersCaringHabitats[], animalsInfo:Animal[]) {
    const habitat = await prisma.habitat.create({
        data: {
            category,
            size,
            capacity,
            area,
            food_percentage,
            zookeepers: {
                create: zookeepersInfo,
            },
            animals: {
                create: animalsInfo,
            },
        },
    });
    return habitat;
};

//Read (query) of an habitat by its ID.
export async function findHabitatById(requestedId:number) {
    const habitat = await prisma.habitat.findUnique({
        where: {
            id:requestedId,
        },
    });
    return habitat;
};

//Read (query) of many habitats by their categorys.
export async function findHabitatsByCategory(requestedCategory:Category) {
    const habitat = await prisma.habitat.findMany({
        where: {
            category: requestedCategory,
        },
    });
    return habitat;
};

//Read (query) of many habitats by their sizes.
export async function findHabitatsBySize(requestedSize:number) {
    const habitat = await prisma.habitat.findMany({
        where: {
            size: requestedSize,
        },
    });
    return habitat;
};

//Read (query) of many habitats by their capacities.
export async function findHabitatsByCapacity(requestedCapacity:number) {
    const habitat = await prisma.habitat.findMany({
        where: {
            capacity: requestedCapacity,
        },
    });
    return habitat;
};

//Read (query) of many habitats by their areas.
export async function findHabitatsByArea(requestedArea:Area) {
    const habitat = await prisma.habitat.findMany({
        where: {
            area: requestedArea,
        },
    });
    return habitat;
};

//Update of an habitat by its ID.
export async function updateHabitatById(requestedId:number, modCategory:Category, modSize:number, modCapacity:number, modArea:Area, modFood_percentage:number, modZookeepersInfo:ZookeepersCaringHabitats[], modAnimalsInfo:Animal[]) {
    const habitat = await prisma.habitat.update({
        where: {
            id: requestedId
        },
        data: {
            category: modCategory,
            size: modSize,
            capacity: modCapacity,
            area: modArea,
            food_percentage: modFood_percentage,
            zookeepers: {
                create: modZookeepersInfo,
            },
            animals: {
                create: modAnimalsInfo,
            },
        },
    });
};

//Delete of an habitat by its ID.
export async function deleteHabitatById(requestedId:number) {
    const habitat = await prisma.habitat.delete({
        where: {
            id: requestedId,
        },
    });
};