import bcrypt  from 'bcrypt';
export const hash=(plainText,saltRounds=process.env.SALTROUNDS) =>{
const hashResult =bcrypt.hashSync(plainText,parseInt(saltRounds));
return hashResult
}
export const compare=(password,hashedValue) =>{
 const hashResult= bcrypt.compareSync(password,hashedValue)
 return hashResult
}
