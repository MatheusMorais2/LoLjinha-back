import { Router } from "express";
import { confirmPurchase } from "../controllers/purchaseController.js";
import { validateToken } from "../middlewares/tokenValidationMiddleware.js";

const purchaseRouter = Router();

purchaseRouter.use(validateToken);
purchaseRouter.post("/confirm-purchase", confirmPurchase);

export default purchaseRouter;
