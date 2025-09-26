import express from "express";
import { getAllUsers, getUserTasks } from "../controllers/admin.controller.js";
import protect, { adminOnly } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/users", protect, adminOnly, getAllUsers);
router.get("/tasks/:userId", protect, adminOnly, getUserTasks);

export default router;
