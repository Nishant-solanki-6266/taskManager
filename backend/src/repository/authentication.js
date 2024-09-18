import usermodel from "../model/UserModel.js";
import jwt from "jsonwebtoken";

export const UserAuth = async (req) => {
    console.log(req);
    let filter = { email: req.email };
    console.log(filter);
    let userdetails = await usermodel.findOne(filter);
    console.log(userdetails);

    if (userdetails) {
        if (userdetails.password == req.password) {
            const token = jwt.sign({ id: userdetails._id }, "xxx");
            const resp = {
                userdetails : userdetails ,
                token: token,
                massege: " you have loged in successfully ",
                status: 1,
            };
            return resp;
        }
        else {
            const resp = {
                massege : "invalid password",
                status : 0
            }
            return resp 
        }
    } else {
        const resp = {
            massege: "invalid details",
            status: 2,
        };
        return resp;
    }
   
};
