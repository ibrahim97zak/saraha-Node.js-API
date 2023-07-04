import mongoose, { Schema, model,Types } from "mongoose";

const MessageSchema = new Schema ({
    message :{
        type : String,
        required : true,
    },
    receiverId : {
        type :Types.ObjectId,
        required : true,
    }
},{
    timestamps : true,
})
const MessageModel = mongoose.models.Message || model ('Message',MessageSchema);
export default MessageModel;