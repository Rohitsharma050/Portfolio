import 'dotenv/config';
import express from "express"
import cors from "cors"
import userRouter from "./Routers/userRouter.js"
const app = express()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT||4000
app.get('/user',(req,res)=>{
    res.json({
        success:true,
        message:"Hello from backend"
    })
})

app.use('/api',userRouter)

app.listen(PORT,()=>{
    console.log("Server started")
})

