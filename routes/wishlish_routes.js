import express from "express";

const router = express.Router();

router.route("/").post(addToWishlist);

export default router;