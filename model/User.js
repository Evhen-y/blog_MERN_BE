import {Schema, model}from "mongoose"

const UserSchema = new Schema({
    fullName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,

    },
    avatarUrl: String,
},
{
    timestamps: true
}
)

export default model("User", UserSchema) //"User" это название модели и UserSchema єто сама модель