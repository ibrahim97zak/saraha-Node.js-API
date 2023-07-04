import MessageModel from "../../../../DB/model/Message.model.js";
import userModel from "../../../../DB/model/user.model.js";
import { asyncHandler } from "../../../services/errorHandler.js";

export const getMessage = asyncHandler( async (req, res) => {
    const messageList = await MessageModel.find({receiverId:req.id})
    if (!messageList){
        return res.json({message:"message not found"})
    }
    return res.json({message:"success",messageList})
    
} )
export const sendMessage = asyncHandler( async (req, res) => {
    const {receiverId}=req.params
    const {message} = req.body;
    const user =await userModel.findById(receiverId);
    if(!user){
        return res.status(404).json({message:'invalid account id'})
    }
    const createMessage = await MessageModel.create({receiverId,message})
    return res.status(201).json({message:"success",createMessage})
})
export const deleteMessage = asyncHandler( async (req, res) => {
    const id=req.id
    const {messageId} =req.params
    const message = await MessageModel.deleteOne({_id:messageId,receiverId:id})
    if(message.deletedCount==0){
        return res.status(404).json({message:"ivalid user id"})
    }
    return res.json({message:"success"})

})