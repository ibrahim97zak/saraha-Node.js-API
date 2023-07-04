export const asyncHandler =(fn)=>{
     return (req,res,next) => {

        fn(req,res).catch(err => {

            return res.status(500).json({ message:"catch error",err:err.stack})
        })
        
     }
}