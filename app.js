import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
const app = express()
dotenv.config();
import connectDB from './config/Connection.js';
connectDB(process.env.DATABASE_URL);
import userRoutes from './Routes/UserRoutes.js';
//middelware
// app.use(cors());
app.options('*', cors()) // include before other routes
app.use(express.json());
// loaded routes:--
app.use("/user",userRoutes);



app.listen(process.env.PORT);