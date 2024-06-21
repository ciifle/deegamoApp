import mongoose from "mongoose";


const propertySchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
   desc:{
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
   


});

const Property = mongoose.model("properties",propertySchema);
export default Property;