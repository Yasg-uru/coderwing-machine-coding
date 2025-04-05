import { Router } from "express";
import {
  checkIsAuthenticated,
  LoginUser,
  register,
} from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const userRoute = Router();

userRoute.post("/register", register);
userRoute.post("/login", LoginUser);
userRoute.get("/check-auth", authMiddleware, checkIsAuthenticated);

export default userRoute;
