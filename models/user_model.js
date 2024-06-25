import mongoose from "mongoose";

const   userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        required: true,
        default: false
    },
    // profileImage:{
    //     type:String,
    //     required:true,
    // },
    ratings:[
        {
            property:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:"properties"
            }
        }
    ],
});

const Users = mongoose.model("Users", userSchema);
export default Users;