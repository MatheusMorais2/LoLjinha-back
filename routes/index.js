import { Router } from "express";

import authRouter from "./authRouter.js";
import cartRouter from "./cartRouter.js";
import itemsRouter from "./itemsRouter.js";

const router = Router();
router.use(authRouter);
router.use(itemsRouter);
router.use(cartRouter);

export default router;
