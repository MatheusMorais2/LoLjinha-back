import { Router } from "express";

import {
  clearCart,
  getCart,
  putItemIntoCart,
} from "../controllers/cartController.js";
import { validateToken } from "../middlewares/tokenValidationMiddleware.js";

const cartRouter = Router();

cartRouter.use(validateToken);
cartRouter.put("/cart/:id", putItemIntoCart);
cartRouter.get("/cart", getCart);
cartRouter.put("/cart/clear", clearCart);

export default cartRouter;
