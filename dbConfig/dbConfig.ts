import mongoose from "mongoose";

export async function connect(){
    try{
        mongoose.connect(process.env.MONGODB_URL!)
        const connection=mongoose.connection
        connection.on('connected',()=>{
            console.log("MongoDB Connected");
        })
        connection.on('error',()=>{
            console.log("MongoDB connection error, make sure DB is up and running");
            process.exit()
        })
    }catch(error){
        console.log("Something went wrong in connecting to DB")
        console.log(error);
    }
}