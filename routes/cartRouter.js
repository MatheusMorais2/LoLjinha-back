import { Router } from "express";

import { putItemIntoCart } from "../controllers/cartController.js";
import { validateToken } from "../middlewares/tokenValidationMiddleware.js";

const cartRouter = Router();

cartRouter.use(validateToken);
cartRouter.put("/cart/:id", putItemIntoCart);

export default cartRouter;
