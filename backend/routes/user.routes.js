import { Router } from "express";
import {
  getUser,
  login,
  logout,
  register,
} from "../controllers/user.controller.js";
import { protectRoute } from "../middlewares/protectRoute.js";

const userRouter = Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/logout", protectRoute, logout);
userRouter.get("/", protectRoute, getUser);

export default userRouter;
