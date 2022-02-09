import { Router } from "express";

import { insertItems } from "../controllers/itemController.js";

const itemsRouter = Router();

itemsRouter.post("/items", insertItems);

export default itemsRouter;
