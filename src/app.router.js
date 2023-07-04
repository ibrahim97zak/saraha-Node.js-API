import authRouter from "./module/auth/auth.router.js"
import userRouter from "./module/user/user.router.js"
import messageRouter from "./module/Message/Message.router.js"
const initApp =(app,express)=>{
    
    app.use(express.json());
    app.get('/',(req,res)=>{
        return res.send('hello..!')
    })
    app.use('/auth',authRouter)
    app.use('/users',userRouter)
    app.use('/message',messageRouter)
    app.use('*',(req, res)=>{
        return res.json({message : 'page not found'})
    })
}
export default initApp;