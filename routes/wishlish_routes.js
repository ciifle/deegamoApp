import express from "express";
import { addToWishlist, removeFromWishlist } from "../controllers/wishlistController.js";

const wishlishRouter = express.Router();

wishlishRouter.route("/add").post(addToWishlist);
wishlishRouter.route("/remove/:id").post(removeFromWishlist);

export default wishlishRouter;