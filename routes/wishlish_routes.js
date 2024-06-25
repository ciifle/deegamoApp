import express from "express";
import { addToWishlist, removeFromWishlist } from "../controllers/wishlistController.js";

const router = express.Router();

router.route("/add").post(addToWishlist);
router.route("/remove/:id").post(removeFromWishlist);

export default router;