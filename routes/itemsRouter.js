import { Router } from "express";
import {
  getAllItems,
  getArmor,
  getHeal,
  getItems,
  getWeapon,
  insertItems,
  showItem,
} from "../controllers/itemController.js";

const itemsRouter = Router();

itemsRouter.post("/items", insertItems);
itemsRouter.get("/", getItems);
itemsRouter.get("/product/:id", showItem);
itemsRouter.get("/all", getAllItems);
itemsRouter.get("/armor", getArmor);
itemsRouter.get("/weapon", getWeapon);
itemsRouter.get("/heal", getHeal);
export default itemsRouter;
