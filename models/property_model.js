import mongoose from "mongoose";
import ratingSchema from "./rating_model.js";

const propertySchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
        default:0
    },
    ratings:[ratingSchema]


});

const Property = mongoose.model("properties",propertySchema);
export default Property;