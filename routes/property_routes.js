import express from "express";
import { createProperty, deleteProperty, getProperties, getPropertyById, updateProperty } from "../controllers/property_controller.js";

const propertyRouter = express.Router();

propertyRouter.route("/").get(getProperties).post(createProperty);
propertyRouter.route("/:id").get(getPropertyById).put(updateProperty).delete(deleteProperty);

export default propertyRouter;