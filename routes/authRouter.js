import { Router } from "express";

import { signUp } from "../controllers/authController.js";
import signupSchemaValidation from "../middlewares/signupSchemaValidation.js";

const authRouter = Router();

authRouter.post("/signup", signupSchemaValidation, signUp);

export default authRouter;
