import dotenv from 'dotenv';
dotenv.config()
import express from 'express'
import initApp from './src/app.router.js'
import connectDb from './DB/connection.js';
const app = express()

const port = 3000
initApp(app,express)
connectDb().then(()=>{

    app.listen(process.env.PORT||port, () => console.log(`Example app listening on port ${port}!`))
})
