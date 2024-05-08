import express from "express";
import { createUser, getUser, getUsers, updateUser } from "../controllers/user_controller.js";

const router = express.Router();

router.route("/").get(getUsers).post(createUser);
router.route("/:id").get(getUser).put(updateUser);

export default router;