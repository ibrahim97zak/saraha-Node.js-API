import userModel from "../../../../DB/model/user.model.js"
import cloudinary from "../../../services/cloudinary.js"
export const getUsers = async (req,res)=>{
    const user = await userModel.find()
    return res.json({message:'success',user})
}
export const updateUser = async (req,res) => {
    const {id} = req.params;
    const {age} = req.body;
    const user = await userModel.updateOne({_id:id},{age})
        
    if(user.modifiedCount > 0){
        return res.json({message:'success',user})
    }else{
        return res.json({message:'failed'})
    }
    
} 
export const deleteUser = async (req,res) => {
    const {id} = req.params;
    const user = await userModel.deleteOne({_id:id})
    if(user.deletedCount> 0){
        return res.json({message:'success',user})
    }else{
        return res.json({message:'failed',user})
    }
} 
export const profile = async (req,res) => {

        return res.json({message:req.id})

}
export const profilePic =async (req,res) => {
    if(!req.file){
        return res.status(404).json({message:"file is required"})
    }else{
        const {secure_url}= await cloudinary.uploader.upload(req.file.path,{folder:`saraha/user/${req.id}`})
        const user = await userModel.updateOne({_id:req.id},{profilePic:secure_url})
        return res.status(200).json({message:"profile updated successfully"})
    }
    
}