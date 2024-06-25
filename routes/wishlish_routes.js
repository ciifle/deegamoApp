import express from "express";
import { addToWishlist, removeFromWishlist } from "../controllers/wishlistController.js";

const wishlishRoutes = express.Router();

wishlishRoutes.route("/add").post(addToWishlist);
wishlishRoutes.route("/remove/:id").post(removeFromWishlist);

export default wishlishRoutes;