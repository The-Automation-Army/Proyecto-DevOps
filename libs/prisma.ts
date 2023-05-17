import { PrismaClient } from "@prisma/client";
import { logger } from "../src/utils/logger";

const prisma = new PrismaClient({
  log: [
    { emit: "event", level: "query" },
  ],
});

prisma.$on("query", (e) => {
  logger.debug(
    `Query: ${e.query}, Params: ${e.params}, Duration: ${e.duration}ms`
  );
});
export default prisma;
