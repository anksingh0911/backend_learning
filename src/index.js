import dotenv from 'dotenv';
import  {app} from './app.js';
import { connectDB } from "./db/index.js";
dotenv.config({
  path:'./env'
})
connectDB()
.then(()=>{
  app.on("error",(error)=>{
    console.log('error:', error);
    throw error
  })
  app.listen(process.env.port || 8000,()=>{
    console.log('Server is running on port', process.env.PORT);
  })
})
.catch((err)=>{
  console.log("Mongodb connection failed!!")
})