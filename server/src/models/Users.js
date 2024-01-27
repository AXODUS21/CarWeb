import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true, },
})

//turns the schema into a collection
//the name of the collection is this VV
export const UserModel = mongoose.model("users" , UserSchema)

