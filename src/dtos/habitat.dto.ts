import { Animal, Area, ZookeepersCaringHabitats } from "@prisma/client";

export interface IHabitat {
  id?: number;
  size: number;
  capacity: number;
  area: Area;
  foodPercentage: number;
  zookeepers: ZookeepersCaringHabitats[];
  animals: Animal[];
}

