import { Animal, Category, Diet, Habitat } from "@prisma/client";
import prisma from "../../libs/prisma";

//Creation of one animal.
async function createAnimal(name:string, gender:string, height:number, weight:number, category:Category, diet:Diet, habitatId:number) {
    const animal = await prisma.animal.create({
        data: {
            name,
            gender,
            height,
            weight,
            category,
            diet,
            belongTo: { connect: {id: habitatId}},
        },
    });
    return animal;
};

//Read (query) of a unique animal via its ID.
async function findAnimalById(id:number) {
    const animal = await prisma.animal.findUnique({
        where: {
            animal_id: id,
        },
    });
    return animal;
};

//Read (query) of many animals via its name.
async function findAnimmalsByName(requestedName:string) {
    const animals = await prisma.animal.findMany({
        where: {
            name: requestedName,
        },
    });
    return animals;
};

//Read (query) of many animals via its category.
async function findAnimmalsByCategory(requestedCategory:Category) {
    const animals = await prisma.animal.findMany({
        where: {
            category: requestedCategory,
        },
    });
    return animals;
};

//Update of an animal via its ID.
async function updateAnimalById(id:number, modName:string, modGender:string, modHeight:number, modWeight:number, modCategory:Category, modDiet:Diet, modHabitatId:number) {
    const animal = await prisma.animal.update({
        where: {
            animal_id: id,
        },
        data: {
            name: modName,
            gender: modGender,
            height: modHeight,
            weight: modWeight,
            category: modCategory,
            diet: modDiet,
            belongTo: { connect: {id: modHabitatId}},
        },
    });
}

//Delete of an animal via is ID.
async function deleteAnimalById(id:number) {
    const animal = await prisma.animal.delete({
        where: {
            animal_id: id,
        },
    });
};