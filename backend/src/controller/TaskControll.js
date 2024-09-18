import StatusCodes from 'http-status-codes'
import { TaskModel } from '../model/TaskModel.js'
import moment from 'moment';

export async function SaveTask(req, res) {


    try {
        req.body['CreatedOn'] = moment().format('MMMM Do YYYY'); 
        req.body['deadline'] = moment().format('MMMM Do YYYY'); 
        let task = new TaskModel(req.body)
        let s = await task.save()
        res.status(StatusCodes.OK).json(s)

    } catch (error) {
        console.log(error);

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ massage: "tumse na ho payega data save " })

    }

}

export async function GetTask(req, res) {


    try {
        const filter = req.params
        const x = await TaskModel.find(filter)  // fronted me jo id de rhe hai vo or database ki id find krke lao
        let totalTask = await TaskModel.count(filter)
        let totalcompleated = 0;

        x.forEach(element => {
            if (element.IsCompleated == true) {
                totalcompleated++
            }
        });
        res.status(StatusCodes.OK).json({ x, totalTask, totalcompleated })
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ massage: "tumse na ho payega data fetch " })

    }

}


export async function CountTotalTask(req, res) {


    try {

        const totalTask = await TaskModel.count()
        res.status(StatusCodes.OK).json(totalTask)

    } catch (error) {

        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ massage: "tumse na ho payega data fetch " })

    }

}




export async function CompleatedTask(req, res) {

    try {
        let filter = { IsCompleated: true }
        const x = await TaskModel.find(filter)
        res.status(StatusCodes.OK).json(x)

    } catch (error) {

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ massage: "got error on fetching compleated task" })


    }

}


export async function IncompleatedTask(req, res) {

    try {
        let filter = { IsCompleated: false }
        const x = await TaskModel.find(filter)
        res.status(StatusCodes.OK).json(x)

    } catch (error) {

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ massage: "got error on fetching incompleated task" })


    }

}

export async function DeleteTask(req, res) {
    try {
        await TaskModel.findByIdAndDelete(req.params.id)
        res.status(StatusCodes.NO_CONTENT).json()
    } catch (error) {

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ massage: "error" })

    }
}


export async function MarkTask_as_Compleated(req, res) {
    try {
        let todayDate = new Date()
        await TaskModel.findByIdAndUpdate(req.params.id, { IsCompleated: true, CompleatedOn: todayDate })
        res.status(StatusCodes.NO_CONTENT).json()
    } catch (error) {

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ massage: "error" })

    }
}
