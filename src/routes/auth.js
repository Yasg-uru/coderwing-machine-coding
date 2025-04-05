import { Router } from "express";
import { LoginUser, register } from "../controllers/auth.controller.js";
const userRoute = Router();

userRoute.post("/register", register);
userRoute.post("/login", LoginUser);
export default userRoute;
