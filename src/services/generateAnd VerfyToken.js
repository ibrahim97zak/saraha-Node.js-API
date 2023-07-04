import jwt from 'jsonwebtoken';
export const generateToken =(payload,signature=process.env.TOKEN_SIG,expiresIn='1hr') => {
const token = jwt.sign(payload,signature,{expiresIn})
return token
}
export const verifyToken = (token,signature=process.env.TOKEN_SIG)=>{
 const decoded  =jwt.verify(token,signature)
 return decoded
}

