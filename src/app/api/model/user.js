import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";
import { type } from "os";

const userSchema =new mongoose.Schema(
    {
        name : {type:String,required:true,unique:true},
        password:{type:String,required:true}
    }
)

const User =mongoose.models.User || mongoose("User",userSchema)

export default User;