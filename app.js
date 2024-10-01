import express from 'express'
import dotenv from 'dotenv';
const app = express()
dotenv.config();
import connectDB from './config/Connection.js';
connectDB(process.env.DATABASE_URL);
import userRoutes from './Routes/UserRoutes.js';
//middelware:--
app.use("/user",userRoutes);



app.listen(process.env.PORT);