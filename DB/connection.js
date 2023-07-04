import mongoose from "mongoose"
const connectDb = async()=>{
     return await mongoose.connect(process.env.DB_LOCAL)
     .then(result=>{
        console.log("connected")
     }).catch(err=>{
        console.log(`not connected :${err}`)
     })
}
export default connectDb;