import mongoose from "mongoose";

  export async function Configuration ()
{
   

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/TaskMANAGER');
        console.log("connected successfully");
        
    } catch (error) {
        console.log("not connected");
    }

}