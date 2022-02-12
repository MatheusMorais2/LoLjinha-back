import { Router } from "express";
import {
  getItems,
  insertItems,
  showItem,
} from "../controllers/itemController.js";

const itemsRouter = Router();

itemsRouter.post("/items", insertItems);
itemsRouter.get("/", getItems);
itemsRouter.get("/product/:id", showItem);
export default itemsRouter;
