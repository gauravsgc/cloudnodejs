import express from 'express'
const app = express()
import connectDB from './config/Connection.js';
connectDB(`mongodb://localhost:27017`);
app.get('/', function (req, res) {
  res.send('Hello World goodmorning everyone')
})

app.listen(3000)