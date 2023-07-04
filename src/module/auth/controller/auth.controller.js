import userModel from "../../../../DB/model/user.model.js";
import { generateToken, verifyToken } from "../../../services/generateAnd VerfyToken.js";
import { compare, hash } from "../../../services/hash&compare.js"
import { sendEmail } from "../../../services/sendEmail.js";
import { loginScheme, signupScheme } from "../auth.validation.js";

export const signup = async (req, res) => {
   
    const { email, password, userName, age, gender } = req.body;
    const user = await userModel.findOne({ email })
    if (user) {
        return res.status(409).json({ message: 'email already exists' })
    }
    const hashPassword = hash(password)
    const token = generateToken({email},process.env.EMAIL_TOKEN)
    const link =`http://localhost:3000/auth/confirmEmail/${token}`
    await sendEmail(email,'confirm email',`<a href ="${link}">verify your email </a>`)
    const createUser = await userModel.create({ userName, email, password: hashPassword })
    return res.status(201).json({ message: "done", user: createUser._id })

}
export const confirmEmail=async(req,res)=>{
    const {token}=req.params
    const decoded=verifyToken(token,process.env.EMAIL_TOKEN)
    const user=await userModel.updateOne({email:decoded.email},{confirmEmail:true})
    return res.json({message:'youe email is confirmed'})
}
export const signin = async  (req, res) => {

const { email, password } = req.body;
const user = await userModel.findOne({ email })
if (!user) {
    return res.status(404).json({ message: 'email not exists' })
} else {
    if(!user.confirmEmail){
        return res.status(503).json({message:'please verify you account'})
    }
    const match = compare(password, user.password);
    if (!match) {
        return res.json({ message: 'invalid password' })
    } else {
        const token = generateToken({ id: user._id })
        return res.status(200).json({ message: 'login succesfuly', token })
    }
}
     
}
