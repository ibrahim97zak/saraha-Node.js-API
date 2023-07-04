import userModel from "../../DB/model/user.model.js";
import { verifyToken } from "../services/generateAnd VerfyToken.js";

export const auth= async(req,res,next) => {
    try {
        const {authorization} = req.headers;
    if(!authorization?.startsWith(process.env.BERARKEY)) {
        return res.json({message:'invalid bearer  key'})
    }
    const token = authorization.split(process.env.BERARKEY)[1];
    if(!token){
        return res.json({message:'invalid token'})
    }
    const decoded=verifyToken(token);
    const authUser= await userModel.findById(decoded.id)
    if(!authUser){
        return res.json({message:'not registred account'})
    }
    req.id= decoded.id
    next();
    } catch (error) {
        return res.json({message:"catch error",error:error.stack})
    }
    

}