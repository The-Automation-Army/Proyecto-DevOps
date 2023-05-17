import express from "express";
import { router } from "./routes";
import { logger } from "./utils/logger";
import cors from "cors";
import { errorHandler } from "./middlewares/errorHandler";
import "express-async-errors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(3000, () => logger.info("Server is running on PORT 3000"));
