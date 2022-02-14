import { Router } from "express";

import {
  clearCart,
  getCart,
  putItemIntoCart,
  addOne,
  removeOne,
} from "../controllers/cartController.js";
import { validateToken } from "../middlewares/tokenValidationMiddleware.js";

const cartRouter = Router();

cartRouter.use(validateToken);
cartRouter.put("/cart/:id", putItemIntoCart);
cartRouter.get("/cart", getCart);
cartRouter.delete("/cart/clear", clearCart);
cartRouter.post("/cart/add/:id", addOne);
cartRouter.post("/cart/remove/:id", removeOne);

export default cartRouter;
