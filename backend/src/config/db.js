import mongoose from 'mongoose';
import { ENV } from './env.js';

export const connectDB= async ()=>{
    try{
       if (!ENV.DB_URL) {
            throw new Error('DB_URL environment variable is required');
        }
        await mongoose.connect(ENV.DB_URL);
        console.log('Database connected successfully');
    }
    catch(err){
        console.error('Database connection failed', err);
        process.exit(1);
    }
}

