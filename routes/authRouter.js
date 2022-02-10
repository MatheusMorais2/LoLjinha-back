import { Router } from "express";

import { signUp, logIn } from "../controllers/authController.js";
import signupSchemaValidation from "../middlewares/signupSchemaValidation.js";
import loginSchemaValidation from "../middlewares/loginSchemaValidation.js";

const authRouter = Router();

authRouter.post("/auth/sign-up", signupSchemaValidation, signUp);
authRouter.post("/auth/login", loginSchemaValidation, logIn);

export default authRouter;
