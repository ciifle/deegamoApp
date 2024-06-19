import mongoose from "mongoose";

const bookSchema = mongoose.Schema({


    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
    properties:[
        {
            property:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:"properties"
            },
            quantity:{
                type:Number,
                required:true,
            },
        }
    ],

})

const Booked = mongoose.model("booked",bookSchema);

export default Booked;