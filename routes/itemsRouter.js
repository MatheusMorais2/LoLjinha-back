import { Router } from "express";
import { getItems, insertItems } from "../controllers/itemController.js";

const itemsRouter = Router();

itemsRouter.post("/items", insertItems);
itemsRouter.get("/", getItems);

export default itemsRouter;
