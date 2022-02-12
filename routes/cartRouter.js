import { Router } from "express";

import { getCart, putItemIntoCart } from "../controllers/cartController.js";
import { validateToken } from "../middlewares/tokenValidationMiddleware.js";

const cartRouter = Router();

cartRouter.use(validateToken);
cartRouter.put("/cart/:id", putItemIntoCart);
cartRouter.get("/cart", getCart);

export default cartRouter;
