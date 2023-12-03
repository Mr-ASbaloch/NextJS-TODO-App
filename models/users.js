import mongoose, { Schema } from "mongoose";

const userSchema = new Schema ({
    firstName : String,
    lastName : String ,
    age : String
})

 export const profile = mongoose.models.profiles || mongoose.model( "profiles", userSchema)