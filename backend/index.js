import express from 'express'
import 'dotenv/config'
import { Configuration as Connection  } from './src/config/Configuredb.js'
import TaskRouter from './src/router/TaskRouter.js'
import cors from 'cors'
import userrouter from './src/router/UserRouter.js'




const app = express()
Connection();


app.use(cors())
app.use(express.json())
app.use(TaskRouter)
app.use(userrouter)



app.listen(process.env.PORT, () => {
    console.log('Listing on port ' + process.env.PORT);
})