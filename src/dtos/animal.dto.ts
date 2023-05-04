import { Category, Diet } from "@prisma/client";

export interface IAnimal {
  id?: number;
  name: string;
  gender: string;
  height: number;
  weight: number;
  category: Category;
  diet: Diet;
  habitatId: number;
}

export interface BaseAnimal extends IAnimal {
  id: number;
}
