import express from "express";
import { createUser, getUser, getUsers, loginUser, updateUser } from "../controllers/user_controller.js";

const router = express.Router();

router.route("/").get(getUsers).post(createUser);
router.route("/:id").get(getUser).put(updateUser);
router.route("/login").post(loginUser)
export default router;