import express from 'express'
import  {fetchdata, savedata}  from '../controller/UserControll.js'

const  userrouter = express.Router()


userrouter.post("/user/savedata",savedata)
userrouter.post("/user/fetchdata",fetchdata)
// userrouter.post("/user/auth",UserAuthentication)


export default userrouter ;