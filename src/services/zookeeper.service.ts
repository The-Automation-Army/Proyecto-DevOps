import { Qualification, Role, Zookeeper, ZookeepersCaringHabitats } from "@prisma/client";
import prisma from "../../libs/prisma";

//Creation of a zookeeper.
export async function createZookeeper(name:string, responsibility:Role, qualification:Qualification, salary:number, authorId:number, habitatsInfo:ZookeepersCaringHabitats[]) {
    const zookeeper = await prisma.zookeeper.create({
        data: {
            name,
            responsibility,
            qualification,
            salary,
            authorId, //should be removed.
            habitats: {
                create: habitatsInfo,
            },
        },
    });
};

//Read (query) of a zookeeper by his ID.
export async function findZookeeperById(requestedId:number) {
    const zookeeper = await prisma.zookeeper.findUnique({
        where: {
            id: requestedId,
        },
    });
    return zookeeper;
};

//Update of a zookeeper by his ID.
export async function updateZookeeperById(requestedId:number, modName:string, modResponsibility:Role, modQualification:Qualification, modSalary:number, modAuthorId:number, modHabitatsInfo:ZookeepersCaringHabitats[]) {
    const zookeeper = await prisma.zookeeper.update({
        where: {
            id: requestedId,
        },
        data: {
            name: modName,
            responsibility: modResponsibility,
            qualification: modQualification,
            salary: modSalary,
            authorId: modAuthorId, //should be removed.
            habitats: {
                create: modHabitatsInfo,
            },
        },
    });
};

//Delete of a zookeeper by his ID.
export async function deleteZookeeperById(requestedId:number) {
    const zookeeper = await prisma.zookeeper.delete({
        where: {
            id: requestedId,
        },
    });
};
