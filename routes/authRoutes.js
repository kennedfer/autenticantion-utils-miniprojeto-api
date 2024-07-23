import express from "express"
import { authController } from "../controllers/authController.js";
const authRoutes = new express.Router();

authRoutes.get("/pin", authController.getRandomPin);
authRoutes.get("/random", authController.getRandomPassword);
authRoutes.get("/hash", authController.hashPassword);

export { authRoutes };