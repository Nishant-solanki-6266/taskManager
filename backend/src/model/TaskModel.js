import mongoose from "mongoose";


const taskSchema = mongoose.Schema({

    userid: { type: String},

    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    CreatedOn: {
        type: String,
        required: true,
    },
    deadline: {
        type: String,
        required: true,
    }
    ,
    CompleatedOn: { type: Date }
    ,
    IsCompleated: { type: Boolean, required: true, default: false }
})


export const TaskModel = mongoose.model('Task', taskSchema);