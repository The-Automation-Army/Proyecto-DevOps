import { Qualification, Role, ZookeepersCaringHabitats } from "@prisma/client";

export interface IZookeeper {
  id?: number;
  name: string;
  responsibility: Role;
  qualification: Qualification;
  salary: number;
  habitats: ZookeepersCaringHabitats[];
}
