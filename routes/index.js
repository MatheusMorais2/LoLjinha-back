import { Router } from "express";

import authRouter from "./authRouter.js";
import itemsRouter from "./itemsRouter.js";

const router = Router();
router.use(authRouter);
router.use(itemsRouter);

export default router;
