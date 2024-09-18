import express from 'express';
import { SaveTask ,GetTask, CompleatedTask, IncompleatedTask, DeleteTask, MarkTask_as_Compleated, CountTotalTask } from '../controller/TaskControll.js';
const TaskRouter = express.Router()


TaskRouter.post("/save/task",SaveTask)
TaskRouter.get("/fetch/task/:userid",GetTask)
TaskRouter.get("/fetch/task/compleated",CompleatedTask)
TaskRouter.get("/fetch/task/incompleated",IncompleatedTask)
TaskRouter.delete("/task/delete/:id",DeleteTask)
TaskRouter.put("/task/mark-complete/:id",MarkTask_as_Compleated)
TaskRouter.get("/count/task/all",CountTotalTask)

export default TaskRouter; 