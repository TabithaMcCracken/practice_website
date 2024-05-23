import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();

const mongoConfig = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI)//connection string 
        console.log('Connected to MongoDB')

    } catch(err){
        console.log(err)

    }
}

export default mongoConfig