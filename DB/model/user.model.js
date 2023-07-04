import mongoose, { Schema, model } from "mongoose";
const userSchema = new Schema ({
    userName :{
        type : String,
        required : true,
    },
    email :{
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    age :{
        type : Number,
    },
    confirmEmail : {
        type : Boolean,
        default : false,
    },
    salary :{
        type : Number,
    },
    gender : { 
        type : String,
        default : 'Male',
        enum:['Male','Female'],
    },
    profilePic: {
        type : String,
    }
},{
    timestamps : true,
})
const userModel = mongoose.models.User || model ('User',userSchema);
export default userModel;