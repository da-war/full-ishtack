import mongoose from 'mongoose';
import { ENV } from './env.js';

export const connectDB= async ()=>{
    try{
        console.log('Connecting to database...');
        await mongoose.connect(ENV.DB_URL);
        console.log('Database connected successfully');
    }
    catch(err){
        console.error('Database connection failed', err);
        process.exit(1);
    }
}

