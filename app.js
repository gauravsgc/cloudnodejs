import express from 'express'
import dotenv from 'dotenv';
const app = express()
dotenv.config();
import connectDB from './config/Connection.js';
connectDB(process.env.DATABASE_URL);
app.get('/', function (req, res) {
  res.send('Hello World goodmorning everyone')
})

app.listen(process.env.PORT);