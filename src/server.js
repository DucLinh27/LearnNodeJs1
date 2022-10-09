// const express = require('express')
import express from 'express';
import configViewEngine from './config/viewsEngine';
import connectDB from './config/connectDB'
import initRountes from './routes/route'
import connection  from './config/connectDB';
require('dotenv').config();
const app = express()
const port = 8080

configViewEngine(app);
initRountes(app);
connectDB();


// app.get('/', (req, res) => {
//   res.render('index.ejs')
// })
// app.get('/about', (req, res) => {
//   res.send('Hello World! Tran duc Linh')
//   })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})