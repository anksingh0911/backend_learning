import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

export const connectDB = async()=>{
  try{
   const connectionResponse =  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log(`Mongo DB connected successfully: ${connectionResponse}, ${connectionResponse.connection.host}`)
  }
  catch(error){
    console.log("Error:", error);
    // throw error;
    process.exit(1)
  }
}