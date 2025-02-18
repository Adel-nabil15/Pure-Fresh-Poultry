import { Router } from "express";
import { sendDetails } from "./user.service.js";
const userRouter=Router()

userRouter.post("/",sendDetails)


export default userRouter 