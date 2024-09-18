import mongoose from "mongoose";


 const userschema =   mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      age: {
        type: Number,
        required: true
      },
      gender: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      }
})



   const usermodel =  mongoose.model ( "user" , userschema)

   export default usermodel