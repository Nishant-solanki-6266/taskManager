import { UserAuth } from "../repository/authentication.js"
import StatusCodes from 'http-status-codes'

 export const UserAuthentication = async (req , res ) =>{
    try {
        const authdata = await  UserAuth(req.body)
        console.log(authdata);
        res.status(StatusCodes.OK).json({authdata})
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({massege : "invalid user details "})
        
    }
}   