import { Router } from "express";

import { signUp, logIn } from "../controllers/authController.js";
import signupSchemaValidation from "../middlewares/signupSchemaValidation.js";
import loginSchemaValidation from "../middlewares/loginSchemaValidation.js";

const authRouter = Router();

authRouter.post("/signup", signupSchemaValidation, signUp);
authRouter.post("/login", loginSchemaValidation, logIn);

export default authRouter;
