import { Router } from "express";
import * as AuthController from "./controller/auth.controller.js"
import { asyncHandler } from "../../services/errorHandler.js";
import { validation } from "../../MiddleWare/validation.js";
import { loginScheme, signupScheme } from "./auth.validation.js";
const router = Router();
router.post('/signup',validation(signupScheme),asyncHandler( AuthController.signup))
router.post('/signin',validation(loginScheme),asyncHandler(AuthController.signin))
router.get('/confirmEmail/:token',AuthController.confirmEmail)
export default router;