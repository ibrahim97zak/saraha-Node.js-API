import multer from 'multer';
import { nanoid } from 'nanoid'

export const HME=(err,req,res,next)=>{
    if(err){
        return res.status(400).json({message:"multer err",err})
    }else{
        next()
    }
}

function fileUpload(){
    const storage = multer.diskStorage({})
    function fileFilter(req,file,cb){
        if(file.mimetype=='image/jpeg'|| file.mimetype=='image/png'){
            cb(null,true)
        }else{
           cb("Invalid File Type",false)
        }
    }
    const upload =multer({fileFilter:fileFilter,storage})
    return upload;
}
export default fileUpload;