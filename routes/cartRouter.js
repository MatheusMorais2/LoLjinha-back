import { Router } from "express";

import getCart from "../controllers/cartController.js";
import { validateToken } from "../middlewares/tokenValidationMiddleware.js";

const cartRouter = Router();

cartRouter.use(validateToken);
cartRouter.get("/cart", getCart);

export default cartRouter;
