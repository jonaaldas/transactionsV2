import express from 'express'
import cors from 'cors'
import {mongodb} from './routes/db.js'
import transactionsRoutes from './routes/transactions.routes.js'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
dotenv.config()
const app = express();
app.use(
  cors({
    origin: '*',
    credentials: true
  })
)
app.use(express.json())
app.use(cookieParser())
mongodb()
app.use(transactionsRoutes)
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
}
app.get('*', (req,res)=>{
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

const port = process.env.PORT || 4026
app.listen(port) 
console.log(`server is running in port ${port}`)