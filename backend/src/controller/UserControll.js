import { StatusCodes } from "http-status-codes";
import usermodel from "../model/UserModel.js";

export async function savedata(req, res) {
    try {
        console.log(req.body)
        const ispresent = await usermodel.findOne({ email: req.body.email })
        if (ispresent) {
            res.status(StatusCodes.OK).json({ massage: "User Allready Exist ", status: 2 })
        }
        else {
            const user = new usermodel(req.body)
            let s = await user.save()
            res.status(StatusCodes.CREATED).json(s)
        }

    } catch (error) {2
        console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ massage: " data not saved " })
    }
}

export async function fetchdata(req, res) {
    try {
        console.log(req.body)
        let filter = { email: req.body.email }
        console.log(filter)
        const s = await usermodel.findOne(filter)
        if (s) {
            if (s.password == req.body.password) {
                res.status(StatusCodes.OK).json(s)
            }
            else {
                res.status(StatusCodes.OK).json({ status: 1, massage: "invalid password" })
            }
        }
        else {
            res.status(StatusCodes.NO_CONTENT).json({ status: 0, massage: " user not  found " })

        }

    } catch (error) {
        console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ massage: " Something Went Wrong Please Try again leter  ", status: 500 })

    }
}



