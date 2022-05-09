import express from 'express'
import cors from 'cors'
import {mongodb} from './routes/db.js'
import transactionsRoutes from './routes/transactions.routes.js'
// initialize express
const app = express();

// use cors so i do not have problems later
app.use(
  cors({
    origin: '*',
    credentials: true
  })
)

// 
app.use(express.json())

// runing the server and importing it from routes
mongodb()

app.use(transactionsRoutes)
// we listen in what port the server is in
const port = 4021
app.listen(port) 
console.log(`server is running in port ${port}`)