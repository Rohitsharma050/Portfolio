import express from "express"
import { sendMessage } from "../Controllers/userController.js"

const userRouter = express.Router()

userRouter.post('/contact',sendMessage)

export default userRouter